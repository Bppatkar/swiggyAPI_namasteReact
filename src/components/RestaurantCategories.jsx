import React from "react";
import ItemList from "./ItemList.jsx";

const RestaurantCategories = ({ data, showItemlist, setShowIndex, index }) => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      <div className="m-auto my-4 w-9/12 bg-gray-50 p-4 shadow-2xl">
        <div
          className="mb-3 flex cursor-pointer justify-between"
          onClick={handleClick}
        >
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span className="cursor-pointer text-lg font-bold">👇🏻</span>
        </div>

        {showItemlist && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategories;
