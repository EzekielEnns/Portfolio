/*
TODO: react mobile support: https://jsramblings.com/how-to-use-media-queries-with-styled-components/
TODO: react transtions: https://reactjs.org/docs/animation.html
TODO: stick toggle button: #fixedbutton {position: fixed; top: 0px; right: 0px;}
TODO: to the top button: https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/
TODO: Add Content.....
*/
import React, {useState, useEffect} from 'react';

//navigation
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//pages
import Portfolio from './Pages/Portfolio.js'
import About from './Pages/About.js'
import Contact from './Pages/Contact.js'
import Header from './Pages/Header.js'
import Navbar from './Pages/Navbar.js'

//style
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './Components/GlobalStyles.js';
import {lightTheme, darkTheme} from './Components/Themes.js';
import {useTheme} from './Hooks/useTheme.js';
import ThemeToggle from './Components/ThemeToggle.js'

function App() {

    //theming
    const [theme,toggleFunc] = useTheme();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    
    return(<ThemeProvider theme={themeMode}>
	       <GlobalStyles/>
	       <ThemeToggle theme={theme} toggleFunc={toggleFunc}/>
	       <Header theme={theme}/>
	       <Router>
	              <Navbar/>
	              <Switch>
	                     <Route exact path="/" component={Portfolio}/>
	                     <Route exact path="/About" component={About}/>
	                     <Route exact path="/Contact" component={Contact}/>
	              </Switch>
	        </Router>
	   </ThemeProvider>);
}

export default App;
