import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import { getRedditDeals } from "./utils/dataApi";

import "./App.css";
import Deal from "./components/Deal";

function DealList() {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(false);

  // const handleClick = dealId => {
  //   let deal = deals.find(deal => deal.id === dealId);
  //   alert("Navigating to: " + deal.title);
  // };

  useEffect(() => {
    setLoading(true);
    getRedditDeals("r/frugalmalefashion")
      .then(res => res.data.children)
      .then(res => {
        const posts = [];
        res.map(item => {
          posts.push(item.data);
          return posts;
        });
        setDeals(posts);
        setLoading(false);
      });
  }, []);

  const filteredDeals = () => {
    const result = deals.filter(deal => deal.link_flair_text === "[Deal/Sale]");
    return result;
  };

  // componentDidMount() {
  //   fetch("https://www.reddit.com/r/frugalmalefashion/new.json")
  //     .then(response => response.json())
  //     .then(jsonResponse =>
  //       this.setState({
  //         data: jsonResponse,
  //         deals: jsonResponse.data.children.map(post => ({
  //           id: post.data.id,
  //           title: post.data.title,
  //           url: "https://www.reddit.com/" + post.data.permalink
  //         }))
  //       })
  //     );
  // }

  return (
    <div className="App">
      <h1>Reddit Deals</h1>
      {loading ? <Loading /> : null}
      {deals.map(deal => {
        return (
          <Deal
            key={deal.id}
            id={deal.id}
            title={deal.title}
            subReddit={deal.subreddit_name_prefixed}
            // url={"https://www.reddit.com/" + deal.permalink}
            // onClick={handleClick}
          />
        );
      })}
    </div>
  );
}

export default DealList;