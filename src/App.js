/*
TODO: to the top button:
TODO: fix nav flicker

TODO: uninstall css Trransitions and remove animate and css
TODO: Add Content.....
*/
import React, {useState, useEffect} from 'react';

//navigation
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

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
import Animate from './Components/Animate.js'

import Scroll from './Components/Scroll.js';

function App() {
    //theming
    const [theme,toggleFunc] = useTheme();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    
    return(<ThemeProvider theme={themeMode}>
	       <GlobalStyles/>
	       <ThemeToggle theme={theme} toggleFunc={toggleFunc}/>
	       <Scroll/>
	       <Header theme={theme}/>
	       <Router>
		   <Navbar/>
	           <Switch>
		       <Route exact path='/' render={()=>{return (<Redirect to="/Portfolio"/>)}}/>
	               <Route exact path="/Portfolio" component={Portfolio}/>
	               <Route exact path="/About" component={About}/>
	               <Route exact path="/Contact" component={Contact}/>
	           </Switch>
	        </Router>
	   </ThemeProvider>);
}
/*

*/
export default App;
