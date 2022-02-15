import React, { useState, useEffect } from "react";
import "./main.css";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import { useRef } from "react";

const SinglePunk = ({ punkListsDatas, selectedPunk, toggleSwitchItem }) => {
  const [activePunk, setActivePunk] = useState(punkListsDatas[0]);
  useEffect(() => {
    setActivePunk(punkListsDatas[selectedPunk]);
  }, [punkListsDatas, selectedPunk]);

  return (
    <div className="main">
      <div className="punkContainer">
        <img
          className="selectedPunk"
          src={activePunk.image_url}
          alt="singlePunk"
        />
      </div>
      <div className="right_part">
        <div className="punkDetails">
          <div className="details_list">
            <div
              className="title"
              style={{
                color: toggleSwitchItem && "#000",
              }}
            >
              {activePunk.name}
            </div>
            <span className="itemNumber">~#{activePunk.token_id}</span>
          </div>
          <div className="ownerImageContainer">
            <img src={activePunk.owner.profile_img_url} alt="owner-punk" />
            <div className="ownerNameAndHandle">
              <div
                className="hexal"
                style={{
                  width: window.innerWidth <= 614 && "100px",
                }}
              >
                {activePunk.owner.address}
              </div>
              <div className="ownerHandle">@msyprocode</div>
            </div>
          </div>
        </div>
        <div className="social_network">
          <div
            className="ownerlink"
            style={{
              border: toggleSwitchItem && "1px solid #000",
            }}
          >
            {toggleSwitchItem ? (
              <i className="fab fa-instagram"></i>
            ) : (
              <img src={instagramLogo} alt="instagramLogo" />
            )}
          </div>
          <div
            className="ownerlink"
            style={{
              border: toggleSwitchItem && "1px solid #000",
            }}
          >
            {toggleSwitchItem ? (
              <i className="fab fa-facebook"></i>
            ) : (
              <img src={twitterLogo} alt="twitterLogo" />
            )}
          </div>
          <div
            className="ownerlink"
            style={{
              border: toggleSwitchItem && "1px solid #000",
            }}
          >
            {toggleSwitchItem ? (
              <i className="fab fa-twitter"></i>
            ) : (
              <img src={moreIcon} alt="moreIcon" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePunk;
