import React,{useRef} from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

function Navbar(props){
    const Nav = styled.nav`

&{
    position: relative;
    top: 50%;
    right: 0;
    left: 0;
    width: 100%;
    display: table;   
    margin: 5% auto;
    transform: translateY(-50%);
}

& a
{
    position: relative;
    width: 33.333%;
    display: table-cell;
    text-align: center;
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    padding: 10px 20px;
    z-index:5;
}

& a:after, & a:before,& a.active:before, & a.active:after{
    content:"";
    display:block;
    width:0%;
    height:5px;
    transition: width 2s;
    z-index:10;
}

& a:after, & a.active:after{
    margin-top:5%;
    margin-left: auto;   /*TODO use short hand*/
    margin-right:20%;
}
& a:before, & a.active:before{
    margin-bottom:5%;
    margin-left:20%;
}

& a:hover:before,& a:hover:after,& a.active:before,& a.active:after{
    width:60%;
}

& .navContact:before{background-color:#98C9FE;}
& .navContact:after{background-color:#8CDCC6;}
& .navPortfolio:before{background-color:#FED1F5;}
& .navPortfolio:after{background-color:#EAB6FE;}
& .navAbout:before{background-color:#B2F0E1;}
& .navAbout:after{background-color:#77E3FE;}

`;
    
    const loc = useLocation().pathname;
    
    return(<Nav>
	       <Link className={(loc=='/Contact'?'active':null)+' navContact'} to="/Contact">Contact</Link>
	       <Link className={(loc=='/'?'active':null)+' navPortfolio'} to="/">Portfolio</Link>
               <Link className={(loc=='/About'?'active':null)+' navAbout'} to="/About">About</Link>
	   </Nav>)
}

export default Navbar
