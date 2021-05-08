//This is not implemented properly gotta fix this when i have time

import React, {useState, useEffect} from 'react';
import {TransitionGroup ,CSSTransition} from "react-transition-group";
//import styled from "styled-components";
import {useLocation, Switch, Route} from "react-router-dom";

import '../Test.css';

import Portfolio from '../Pages/Portfolio.js'
import About from '../Pages/About.js'
import Contact from '../Pages/Contact.js'

function Animate({children}){

    const location = useLocation();
    
    return(<CSSTransition key={location.key} timeout={300} classNames="fade">
	       {children}
	   </CSSTransition>);
}

export default Animate;
