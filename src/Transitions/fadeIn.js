export const fadeVarient = {
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vh",
    scale: 1.1,
  },
  initial: {
    opacity: 0,
    x: "-100vh",
    scale: 0.6,
  },
};

export const pageTransitions = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4,
};

export const pageStyles = {
  position: "absolute",
};
