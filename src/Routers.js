import React from "react";
import { BrowserRouter, Route, Switch,useLocation } from "react-router-dom";
import {AnimatePresence,motion} from 'framer-motion';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Header from './Header';
function Routers() {
    let location = useLocation();
  return (
      <>
    <Header/>
    <div style={{position:'relative'}}>
    <AnimatePresence initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/Contact" exact component={Contact} />
      </Switch>
      </AnimatePresence>
      </div>
      </>
  );
}

export default Routers;
