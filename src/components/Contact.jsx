import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="m-4 p-4 text-3xl font-bold">Contact Us</h1>
      <form>
        <input
          type="text"
          className="m-2 rounded-md border border-black p-2"
          placeholder="name"
        />
        <input
          type="text"
          className="m-2 rounded-md border border-black p-2"
          placeholder="message"
        />
        <button className="m-2 rounded-md border border-black p-2 transition-all duration-[.3s] hover:bg-black hover:text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
