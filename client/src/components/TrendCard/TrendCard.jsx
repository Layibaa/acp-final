import React from 'react';
import './TrendCard.css';
import TrendData from '../../Data/TrendData'; 

const defaultTrends = [
  { name: "Trending Topic 1", shares: 100 },
  { name: "Trending Topic 2", shares: 80 },
];

const TrendCard = () => {
  const trendData = Array.isArray(TrendData) && TrendData.length > 0 ? TrendData : defaultTrends;

  return (
    <div className="TrendCard">
      <h3>Trends for you</h3>
      
      {trendData.map((trend, id) => (
        <div className="trend" key={id}>
          <span>#{trend.name}</span>
          <span>{trend.shares}k shares</span>
        </div>
      ))}
    </div>
  );
};

export default TrendCard;
