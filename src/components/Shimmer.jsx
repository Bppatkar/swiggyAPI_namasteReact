import React from "react";

const Shimmer = ({ count }) => {
  const shimmerCards = Array.from({ length: count }).map((_, index) => (
    <div className="shimmer-cards" key={index}></div>
  ));

  return <div className="shimmer-container">{shimmerCards}</div>;
};

export default Shimmer;
