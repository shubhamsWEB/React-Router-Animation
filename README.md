# React-Router-Animation
React Routing Animations with page transitions.

Motivations
-----------
- Simple Routing is Boring.
- Page Transitions make the Site more interactive and fun.  
- Easy to Configure/edit animations (feature)
- Works on top of React routers. (feature)

How it works
------------
React Routing Animation uses Farmer Motion Librery for animation.

Directory Structure
```
src
└── Transitions
   └── fadeIn.js
   └── fadeOut.js
   └── rotate.js
   └── scale.js
   └── skew.js
   └── slideIn.js
   └── slideOut.js

```
Adding a New Page
------------
- Import type of page transitions you want to use from Transitions folder.
- Wrap the Jsx with <motion.div></motion.div>

```js
import React from "react";
import { motion } from "framer-motion";
import { slideOutVarient, pageTransitions, pageStyles} from "./Transitions/slideOut";

function About() {
  return (
    <motion.div
      exit="out"
      animate="in"
      initial="initial"
      variants={slideOutVarient} //Transition Name
      transition={pageTransitions}
      style={pageStyles}
      className={classes.root}
    >
      <center><Typography variant="h1" component="h1" color="default">About</Typography></center>
      <h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </h1>
    </motion.div>
  );
}

export default About;
```
# Animations
------------

BounceIn Animation
------------

![bounce In Animation](Demo/bounceIn.gif)

FadeIn Animation
------------
![Fade In Animation](Demo/fadeIn.gif)

Skew Animation
------------
![Skew Animation](Demo/skew.gif)

SlideIn Animation
------------
![Slide In Animation](Demo/slideIn.gif)

SlideOut Animation
------------
![Slide Out Animation](Demo/slideOut.gif)
