"use client";

import React from "react";
import "./my-team.scss";
import { Card, Input } from "antd";

const TeamStatsEntity = () => {
  return (
    <div className="team-stats-entity">
      {" "}
      <div className="first-section">
        <img src="/assets/photo.svg" alt="profile" />
        <div className="name-wrapper">
          <span className="name">Oscar Holloway</span>
          <span className="status">Current Status 203</span>
        </div>
      </div>
      <div className="second-section">
        <div className="highlighted-section">
          <span className="h-key">Won</span>
          <span className="h-value">500</span>
        </div>
        <div className="highlighted-section">
          <span className="h-key">Lost</span>
          <span className="h-value">500</span>
        </div>
        <div className="highlighted-section">
          <span className="h-key">Total</span>
          <span className="h-value">1000</span>
        </div>
      </div>
      <div className="divider"></div>
      <div className="third-section">
        <span>Languages</span>
        <div className="languages">
          <span className="entity">Hindi</span>
          <span className="entity">Tamil</span>
          <span className="entity">Telugu</span>
        </div>
      </div>
    </div>
  );
};

const MyTeamView: React.FC = () => {
  return (
    <Card className="my-team-wrapper">
      <div className="my-team-view">
        <div className="title-wrapper">
          <span className="title">My Team</span>
          <span className="description">Total agents 167</span>
        </div>
        <Input
          type="search"
          className="team-search"
          prefix={<img src="/assets/search-gray.svg" alt="search" />}
          placeholder="Search"
        />
      </div>
      <TeamStatsEntity />
      <TeamStatsEntity />
      <TeamStatsEntity />
      <TeamStatsEntity />
      <TeamStatsEntity />

    </Card>
  );
};

export default MyTeamView;
