import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context";
import { categories } from "../components/categories";
import DealPage from "./DealPage";
import Loading from "../components/Loading";
import { getRedditDeals, getDealImage } from "../utils/dataApi";
import Deal from "../components/Deal";
import DefImg from "../images/baseline_add_shopping_cart_black.png";
import "../App.css";

function DealList() {
  const { subreddit } = useParams();
  const [state, setState] = useContext(Context);
  const [loading, setLoading] = useState(false);
  const { deals } = state;
  const [id, setId] = useState(null);

  const category = categories.find(category => {
    return category.name === subreddit;
  });

  const handleClick = id => {
    setId(id);
  };

  console.log(id);

  useEffect(() => {
    setLoading(true);
    getRedditDeals(subreddit)
      .then(res => res.data.children)
      .then(res => {
        const posts = [];
        res.map(item => {
          posts.push(item.data);
          return posts;
        });
        setState({ deals: posts });
        setLoading(false);
        return posts;
      })
      .then(deals => {
        const dealsWithImageUrls = [...deals];
        dealsWithImageUrls.map(deal => {
          getDealImage(deal).then(imageUrlRes => {
            deal.imageUrl = !imageUrlRes ? DefImg : imageUrlRes;
            setState({ deals: dealsWithImageUrls });
          });
        });
      });
  }, [subreddit, setState]);

  const filteredDeals = () => {
    const result = deals.filter(
      deal => !category.excluded_flair.includes(deal.link_flair_text)
    );
    return result;
  };

  if (loading)
    return (
      <div className="d-flex justify-content-center mt-5">
        <Loading />
      </div>
    );
  else {
    return (
      <div className="list-group list-group-flush">
        <h2 className="mt-4 mb-4 d-flex justify-content-center text-success">
          {subreddit}
        </h2>
        {filteredDeals().map((deal, index) => {
          return (
            <div onClick={() => handleClick(deal.id)}>
              <Deal
                index={1 + index}
                key={deal.id}
                title={deal.title}
                thumbnail={deal.imageUrl}
              />
            </div>
          );
        })}
        <DealPage id={id} subreddit={subreddit} />
      </div>
    );
  }
}

export default DealList;
