import React from "react";

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
        Jack Padalino
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Full Stack Software Engineer
      </p>
      <span>
        <a
          className="text-cyan-600 hover:underline"
          href="https://www.linkedin.com/in/jack-padalino-5b743826/"
          target="_blank"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          className="text-cyan-600 hover:underline"
          href="https://github.com/JackPadalino"
          target="_blank"
        >
          Github
        </a>
      </span>
    </div>
  );
};

export default Intro;
