import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// alg alg test kro ya fir.... sare ko combine krke describe m wrap kr do

describe("check about contact page", () => {
  test("checking that contact page is loaded of not", () => {
    render(<Contact />);

    //Querying

    const heading = screen.getByRole("heading");

    //Assertion

    expect(heading).toBeInTheDocument();
  });

  //! checking other case that my button is visible or not

  test("checking that Button is loaded of not", () => {
    render(<Contact />);

    //Querying

    const button = screen.getByRole("button");

    //Assertion

    expect(button).toBeInTheDocument();
  });
});

// if we are testing UI component so we need to use Rendder method which is given by @testing-library/react
