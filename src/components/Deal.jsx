import React from "react";
import { Image } from "react-bootstrap";

function Deal({ index, title, thumbnail }) {
  const filterTitle = title => {
    return title.length > 86 ? title.slice(0, 85) + "..." : title;
  };

  return (
    <li style={{ cursor: "pointer" }} className="list-group-item d-flex">
      <h6 className="d-flex align-items-center mr-3">{index}</h6>
      <div className="deal-icon-container d-flex flex-wrap align-items-center">
        <div>
          <Image src={thumbnail} className="deal-icon" />
        </div>
      </div>
      {/* <div className="col-auto mb-3">
        <img src={thumbnail} width="100px" alt="deal" />
      </div> */}
      <div className="m-3 my-auto">
        <span
          className="text-success"
          dangerouslySetInnerHTML={{ __html: filterTitle(title) }}
        />
      </div>
    </li>
  );
}

export default Deal;
