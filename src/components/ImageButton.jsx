import React from "react";
import { Link } from "react-router-dom";
import { categories } from "./categories";
import { Row, Col } from "react-bootstrap";

// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => {
//     images[item.replace("./", "")] = r(item);
//   });
//   return images;
// }

// const images = importAll(
//   require.context("../images/category/m", false, /\.jpg$/)
// );

// const images = [
//   { id: 1, src: "../images/category/buildapcsales.jpg" },
//   { id: 2, src: "../images/category/frugalfemalefashion.jpg" },
//   { id: 3, src: "../images/category/frugalmalefashion.jpg" },
//   { id: 4, src: "../images/category/gamesale.jpg" },
//   { id: 5, src: "../images/category/greatxboxdeals.jpg" },
//   { id: 6, src: "../images/category/homedecordeals.jpg" },
//   { id: 7, src: "../images/category/onlinegrocerydeals.jpg" },
//   { id: 8, src: "../images/category/ps4deals.jpg" },
//   { id: 9, src: "../images/category/sneakerdeals.jpg" },
//   { id: 10, src: "../images/category/steamdeals.jpg" },
//   { id: 11, src: "../images/category/travel_deals.jpg" },
//   { id: 12, src: "../images/category/vinyldeals.jpg" }
// ];

export default function ButtonBases({ changeUrl }) {
  return (
    <>
      <Row noGutters>
        {categories.map(category => (
          <Col key={category.name} xs={6} md={4} lg={3}>
            <Link
              className="image-button-link"
              to={category.name}
              onClick={() => {
                changeUrl(category.name);
              }}
            >
              <div
                className="image-button"
                style={{
                  backgroundImage: " url('" + category.image + "')"
                }}
              >
                <span className="image-button-text">{category.name}</span>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}
