"use client";

import React, { useState } from "react";
import "./stats-card.scss";
import { Card } from "antd";

const StatsCard = ({
  name,
  stats,
  icon,
}: {
  name: string;
  stats: string;
  icon: string;
}) => {
  return (
    <Card className="stats-card">
      <div className="content-wrapper">
        <div className="stat-section-wrapper">
          <span className="stats">{stats}</span>
          <span className="name">{name}</span>
        </div>
        <img src={`/assets/${icon}`} alt="icon" />
      </div>
    </Card>
  );
};

export default StatsCard;
