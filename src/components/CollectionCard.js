import React from "react";
import "./collectioncard.css";
import weth from "../assets/weth.png";

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collectioncard">
      <img src={image} alt={name} />
      <div className="details">
        <div className="name">
          {name} <div className="id">~#{id}</div>
        </div>
        <div className="priceContainer">
          <img src={weth} className="wethImage" alt="weth" />
          <div className="price">{traits[0]?.value} </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
