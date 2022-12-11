import React from "react";
import { useSpring, config, animated } from "react-spring";

function AnimatedNumber({ done }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: done,
    config: config.molasses,
  });

  return (
    <animated.div style={{ fontSize: "50px" }}>
      {number.to((n) => Math.round(n))}
    </animated.div>
  );
}

export default AnimatedNumber;
