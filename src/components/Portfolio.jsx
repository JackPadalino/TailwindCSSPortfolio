import React from "react";
import portfolio from "../data/portfolio.js";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio.map((project) => {
          return (
            <PortfolioItem
              imgURL={project.imgURL}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
