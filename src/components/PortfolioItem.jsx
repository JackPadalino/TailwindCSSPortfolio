import React from "react";

const PortfolioItem = ({ title, imgURL, stack, link }) => {
  return (
    <div className="border-2 border-stone-900 rounded-md overflow-hidden dark:border-white">
      <img
        src={imgURL}
        alt="image"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
          {stack.map((item) => {
            return (
              <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md dark:border-white">
                {item}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default PortfolioItem;
