import React from "react";
import { useState } from "react";

import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  const [page, setPage] = useState(1);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        <span
          style={{ fontSize: "50px", alignSelf: "center" }}
          onClick={() => setPage((page) => (page === 1 ? page : page - 1))}
        >
          &#10094;
        </span>
        {items
          .filter((item, idx) => {
            return idx >= page * 4 - 4 && idx < page * 4;
          })
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        <span
          style={{ fontSize: "50px", alignSelf: "center" }}
          onClick={() =>
            setPage((page) =>
              page === Math.ceil(items.length / 4) ? page : page + 1
            )
          }
        >
          &#10095;
        </span>
      </div>
    </div>
  );
};

export default CollectionPreview;
