// now check header .....  is loading or not

import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// we can use it instead of test

it("should render header component with a login button ", () => {
  //error comes because in header component there is useSelector and it is come from react-redux and this is RTK so we have to wrap it in provider and give to store which we made it by name appStore see it.....
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  //Querying

  //multiple way to check button exist or not

  // const loginButton = screen.getByRole("button");
  // const loginButton = screen.getByText("Login");
  const loginButton = screen.getByRole("button", { name: "Login" });

  //Assertion
  expect(loginButton).toBeInTheDocument();
});

test("should render header component with a cart ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  //Querying

  const cartItem = screen.getByText(/Cart/);

  //Assertion
  expect(cartItem).toBeInTheDocument();
});

test("should change the login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  // for checking button click we use fireEvent
  //Querying

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  //so we check is there logout button after click on login button
  const logoutButton = screen.getByRole("button", { name: "Logout" });

  //Assertion
  expect(logoutButton).toBeInTheDocument();
});
