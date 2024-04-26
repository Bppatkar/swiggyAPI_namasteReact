import React, { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const menu_api =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.1685786&lng=79.9338798&restaurantId=";

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await fetch(menu_api + resId);
      const data = await res.json();
      setResInfo(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
