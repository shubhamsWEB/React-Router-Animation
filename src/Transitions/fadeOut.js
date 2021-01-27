export const fadeOutVarient = {
    in: {
      scale: 1,
      y: 0,
      opacity: 1,
    },
    out: {
      scale: 0.75,
      y: 30,
      opacity: 0.5,
    },
    initial: {
      scale: 0,
      y: 105,
      opacity: 0,
    },
  };

  export const pageTransitions = {
    type: "spring",
    damping: 20,
    stiffness: 100,
  };
  
  export const pageStyles = {
    position: "absolute",
  };