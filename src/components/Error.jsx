import React from "react";
import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  // console.log(error);
  if (error.status == 404) {
    return (
      <>
        <div>
          <img
            src="https://www.wpoven.com/blog/wp-content/uploads/2022/09/error-404-not-found.png"
            alt="not found"
          ></img>
          <h3>Ohh!!</h3>
          <p>We are not able to find the page for the given Url</p>
          <Link to="/">
            <center>
              <b> Home 👈🏻(Click here) </b>{" "}
            </center>
          </Link>
        </div>
      </>
    );
  }
};
export default Error;
