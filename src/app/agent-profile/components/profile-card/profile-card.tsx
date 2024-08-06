"use client";

import { Card } from "antd";
import "./profile-card.scss";

const ProfileCard = () => {
  return (
    <Card>
      <div className="first-line">
        <div className="meta">
          <img src="/assets/photo.svg" alt="profile" />
          <div className="name-section">
            <span className="name">Oscar Holloway</span>
            <span className="type">Customer Support Agent</span>
          </div>
        </div>
        <div className="languages">
          <span className="heading">Languages</span>
          <div className="languages-wrapper">
            <span className="language-entity">Hindi</span>
            <span className="language-entity">Tamil</span>
            <span className="language-entity">Telugu</span>
          </div>
        </div>
        <div className="join-date">
          <span className="heading">Join Date</span>
          <span className="date">22, February 2024</span>
        </div>
        <div className="stats">
          <div className="stats-entity">
            <span className="stats-type">Won</span>
            <span className="stats-value">500</span>
          </div>
        </div>
      </div>
      <div className="second-line">
        <div className="entity">
          <span className="heading">Team</span>
          <span className="value">GGP Lead Team</span>
        </div>
        <div className="entity">
          <span className="heading">Phone</span>
          <span className="value">+919837744472</span>
        </div>
        <div className="entity">
          <span className="heading">Whatsapp</span>
          <span className="value">+919837744472</span>
        </div>
        <div className="entity">
          <span className="heading">Email</span>
          <span className="value">Oscasr.h@satports.net</span>
        </div>
        <div className="entity">
          <span className="heading">Address</span>
          <span className="value">
            Al warsan 4, International city phase 2, Dubai
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
