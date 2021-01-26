import React from "react";
import { motion } from "framer-motion";
// import { fadeVarient, pageTransitions, pageStyles } from "./Transitions/fadeIn";
// import { rotateVarient, pageTransitions, pageStyles} from "./Transitions/rotate";
import { skewVarient, pageTransitions, pageStyles} from "./Transitions/skew";

import { makeStyles,Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#2938FF",
    color: "#fff",
    height: "auto",
    padding: 40

  },
}));
function Contact() {
  const classes = useStyles();
  return (
    <>
    <motion.div
      exit="out"
      animate="in"
      initial="initial"
      variants={skewVarient}
      transition={pageTransitions}
      style={pageStyles}
      className={classes.root}
    >
      <center><Typography variant="h1" component="h1" color="default">Contact</Typography></center>
      <h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </h1>
      <h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </h1>
      <h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </h1>
    </motion.div>
    </>
  );
}

export default Contact;
