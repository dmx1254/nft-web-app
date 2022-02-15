import React from "react";
import "./punklist.css";
import CollectionCard from "./CollectionCard";

const Punklist = ({ punkListsDatas, setSelectedPunk }) => {
  return (
    <div className="punklist">
      {punkListsDatas.map((punk) => (
        <div onClick={() => setSelectedPunk(punk.token_id)}>
          <CollectionCard
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_url}
          />
        </div>
      ))}
    </div>
  );
};

export default Punklist;
