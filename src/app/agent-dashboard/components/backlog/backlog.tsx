"use client";

import React from "react";
import "./backlog.scss";
import { Card } from "antd";
import Image from "next/image";

const Backlog: React.FC = () => {
  const dummyData = [
    {
      name: "Jane Cooper",
      number: "(225) 555-0118",
    },
    {
      name: "Jane Cooper",
      number: "(225) 555-0118",
    },
    {
      name: "Jane Cooper",
      number: "(225) 555-0118",
    },
    {
      name: "Jane Cooper",
      number: "(225) 555-0118",
    },
    {
      name: "Jane Cooper",
      number: "(225) 555-0118",
    },
    {
      name: "Jane Cooper",
      number: "(225) 555-0118",
    },
    {
      name: "Jane Cooper",
      number: "(225) 555-0118",
    },
    {
      name: "Jane Cooper",
      number: "(225) 555-0118",
    },
    {
      name: "Jane Cooper",
      number: "(225) 555-0118",
    },
    {
      name: "Jane Cooper",
      number: "(225) 555-0118",
    },
    {
      name: "Jane Cooper",
      number: "(225) 555-0118",
    },
    {
      name: "Jane Cooper",
      number: "(225) 555-0118",
    },
    {
      name: "Jane Cooper",
      number: "(225) 555-0118",
    },
    {
      name: "Jane Cooper",
      number: "(225) 555-0118",
    },
  ];

  return (
      <Card className="backlog-list">
        <div className="heading-wrapper">
          <span className="heading">Backlog</span>
          <div className="count-section">
            <span className="count">90 Leads</span>
            <span className="description">Today&apos;s Remaining</span>
          </div>
        </div>
        {dummyData.map((item, index) => {
          return (
              <div key={index} className="backlog-entity">
                <span className="details-entity">{item.name}</span>
                <span className="details-entity">{item.number}</span>
                <span className="detail-link">
              View Details
              <Image src="/assets/arrow-right-orange.svg" alt="Arrow right" width={16} height={16} />
            </span>
              </div>
          );
        })}
      </Card>
  );
};

export default Backlog;