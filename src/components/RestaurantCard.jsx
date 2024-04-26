import "../../src/App.css";

const RestaurantCard = ({ resData }) => {
  // console.log(resData);
  const {
    id,
    cloudinaryImageId,
    name,
    locality,
    areaName,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    aggregatedDiscountInfoV3,
  } = resData?.info;

  return (
    <div
      data-testid="resCard"
      className="res-card "
      style={{ backgroundColor: "#fff4f4 " }}
    >
      <div className="imgCard">
        <div className="discount-label">
          {aggregatedDiscountInfoV3 &&
            `${aggregatedDiscountInfoV3.header} - ${aggregatedDiscountInfoV3.subHeader}`}
        </div>
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt="img"
        />
      </div>
      <div className="details">
        <h2>{name}</h2>
        <div className="locality">
          <h4>{locality}</h4> <h3>({areaName})</h3>
        </div>
        <h4 className="cuisines">{cuisines.join(", ")}</h4>
        <h5>{avgRating}⭐</h5>

        <div className="locality">
          <h2> {costForTwo}</h2>
          <h5> - {sla?.deliveryTime} min</h5>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
