import React, { useEffect, useState } from "react";
import { getDeal, getDealImage } from "../utils/dataApi";
import Moment from "react-moment";
import Loading from "../components/Loading";
import ReactMarkdown from "react-markdown";
import { Modal, Button } from "react-bootstrap";

function DealPage({ subreddit, id }) {
  const [deal, setDeal] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  function toggleClose() {
    setShow(false);
    setDeal({});
    setImageUrl("");
    setLoading(false);
  }

  console.log(deal, imageUrl);
  useEffect(() => {
    if (id) {
      setShow(true);
      setLoading(true);
      getDeal(subreddit, id)
        .then(res => {
          var deal = res[0].data.children[0].data;
          setDeal(deal);
          return deal;
        })
        .then(deal => {
          getDealImage(deal).then(imageUrlRes => {
            setImageUrl(imageUrlRes);
            setLoading(false);
          });
        });
    }
  }, [subreddit, id]);

  if (loading)
    return (
      <div className="mt-5 d-flex justify-content-center">
        <Loading />
      </div>
    );

  return (
    <Modal show={show} onHide={toggleClose} animation={false} scrollable>
      <Modal.Header style={{ borderBottom: "none" }} closeButton>
        <Modal.Title>
          <div className="lead">
            <span
              className="card-title text-success"
              dangerouslySetInnerHTML={{ __html: deal.title }}
            />
            <span className="card-date-time">
              &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
              <Moment unix fromNow withTitle titleFormat="LLLL">
                {deal.created_utc}
              </Moment>
            </span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ maxWidth: 800 }} className="container-sm mx-auto">
          <div className="card">
            {imageUrl ? (
              <img
                src={imageUrl}
                style={{ width: "30%" }}
                className="card-img-top mt-4 mx-auto"
                alt="deal"
              />
            ) : null}
            <ul className="list-group list-group-flush">
              {deal.selftext ? (
                <li className="list-group-item">
                  <ReactMarkdown source={deal.selftext} />
                </li>
              ) : null}
              <li className="list-group-item m-2 mx-auto">
                <Button
                  onClick={() =>
                    window.open(
                      deal.url.startsWith("/")
                        ? "https://www.reddit.com" + deal.url
                        : deal.url,
                      "_blank"
                    )
                  }
                  className="card-link"
                >
                  View Deal &#x1F855;
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DealPage;
