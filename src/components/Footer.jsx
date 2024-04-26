import React from "react";
import "./Footer.css";

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <>
      <footer className="skewed-bg">
        <div className="content">
          <h1 className="title">Footer</h1>
          <p>
            Copyright &copy; {currYear}, Made with 💗 by <strong>BHANU</strong>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
