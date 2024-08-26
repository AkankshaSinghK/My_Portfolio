import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterEffect = ({ textArray }) => {
  return (
    <Typewriter
    options={{
      strings: textArray,
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
      pauseFor: 1000,
    }}
  />
  );
};

export default TypewriterEffect;
