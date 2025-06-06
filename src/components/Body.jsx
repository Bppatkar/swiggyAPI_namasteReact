import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const swiggy_Api =
  "https://corsproxy.io?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1685786&lng=79.9338798&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1685786&lng=79.9338798&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(swiggy_Api);
    const data = await res.json();
    // console.log(data);
    setListofRestaurant(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return <h1>You're Offline..!!! Please check your Internet Connection</h1>;

  return (
    <>
      {listofRestaurant.length === 0 ? (
        <Shimmer count={12} />
      ) : (
        <div className="m-3">
          <div className="m-5">
            <input
              type="text"
              data-testid="searchInput"
              value={searchText}
              className="mx-4 rounded-lg border-2 border-black px-4 py-1"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="-mr-5 rounded-lg bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700"
              onClick={() => {
                const filteredRes = listofRestaurant.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()),
                );
                setFilteredRestaurants(filteredRes);
              }}
            >
              Search
            </button>
          </div>
          <div className="res-container">
            {filteredRestaurants.map((res) => (
              <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
                <RestaurantCard resData={res} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
