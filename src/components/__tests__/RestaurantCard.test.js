// now we check test results of RestaurantCard bcz it getting Props ... so here we are learning that if component is recieving props so how we test it

import { render, screen } from "@testing-library/react";
import RestaurantCard from "../../components/RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../../components/mocks/resCard.json";

test("should render RestaurantCard componen with Props Data", () => {
  // we use mock data ... in a body component we send resData to resCardComponent we log that data in console and copy one object and create mocks folder and one file resCard.json now we use that mockdata in that restaurantcard below
  render(<RestaurantCard resData={MOCK_DATA} />);

  //Querying
  // we check that name of restuarant will present or not if present so our ResCard will work properly

  const CardNameExist = screen.getByText("GetAWay-Ice Creams & Desserts");

  //Assertion
  expect(CardNameExist).toBeInTheDocument();
});
