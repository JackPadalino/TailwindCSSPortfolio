import React from "react";
import Title from "./Title";

const Contact = () => {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="#"
          method="POST"
          className="flex flex-col w-full max-sm:mx-5 max-md:mx-5 md:w-1/3"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            id="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="button"
            className="text-center inline-block px-8 
            py-3 w-max text-base focus-medium rounded-md 
            text-white bg-gradient-to-r from-yellow-500 
            to-pink-500 drop-shadow-md hover:stroke-white"
          >
            Let's Work Together!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
