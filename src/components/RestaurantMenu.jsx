import Shimmer from "./Shimmer";
import "./RestaurantMenu.css";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) {
    return <Shimmer count={12} />;
  }

  const { name, locality, areaName, cuisines, avgRating, costForTwo, sla } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards || [];

  // console.log(
  //   resInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards,
  // );

  const categories =
    resInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  // console.log(categories);
  return (
    <>
      <div className="menu m-auto my-4  flex  w-8/12 justify-between ">
        <div className="left">
          <h1 className="heading">{name}</h1>
          <div className="flexing">
            <div>
              <h4 className="cuisines">{cuisines?.join(", ")}</h4>
            </div>
            <div className="area">
              <h4>{locality}</h4>
              <h3>({areaName})</h3>
            </div>
          </div>
          <div className="costmoney">
            <h2> {sla?.deliveryTime} min</h2>
            <h3> ₹{costForTwo / 100} /-</h3>
          </div>
        </div>

        <div className="right">
          <div className="rating">
            <h5> ⭐ {avgRating}</h5>
          </div>
        </div>
      </div>
      <div className=" line "></div>

      {/* categories */}
      <div className="listofRes">
        {categories.map((category, index) => (
          <RestaurantCategories
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItemlist={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
