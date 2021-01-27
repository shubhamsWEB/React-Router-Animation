// export const rotateVarient = {
//   in: {
//     rotateY:0,
//     x:0,
//   },
//   out: {
//     rotateY:90,
//     x:"90vh"
//   },
//   initial: {
//     rotateY:90
//   },
// };

export const rotateVarient = {
  in: {
   rotateX:0,
   opacity:1,
   x:0
  },
  out: {
    rotateX:-100,
    opacity:0,
    x:'-100vh'

  },
  initial: {
  rotateX:-100,
  opacity:0,
  x:'-100vh'

  },
};
export const pageTransitions = {
  type: "spring",
  damping: 20,
  stiffness: 100
  // type: 'tween',
  // ease:'circInOut'
};

export const pageStyles = {
  position: "absolute",
};
