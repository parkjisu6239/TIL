import React from "react";
import "../Card.css";

export const CardItem = ({ item }) => {
  return (
    <div>
      <a className="card-item" href={item.url}>
        {item.displayName}
      </a>
    </div>
  );
};
