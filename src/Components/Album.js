/*
Album
    displays a single photo form a collection
    with the ability to scroll through them
Props
    imgs: list of img locations to display
*/
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

function Album(props){

    const Alb = styled.div.attrs(()=>({tabIndex:0}))`
&{
    width:max-content;
    margin-right:10px;
}

&>img{
    max-width:100%;
    height:100%;
    z-index:0;
    box-shadow:-10px 10px black;
}

&{
    display:flex;
    flex-direction:column;
    justify-content:center;
}



& button{
    z-index:100;
    position:absolute;
    opacity:0;
    background-color:black;
    color:white;
    font-size:2em;
    transition: opacity 1s;
}

& button:hover{
    opacity:0.5;
    
}`;

    const PrvBtn = styled.button`align-self:start;`;
    const NxtBtn = styled.button`align-self:end;`;
    
    const [index,setIndex]= useState(0);

    const handlePrvBtn = (e)=> {
	e.preventDefault();
	if(index-1 > 0)
	    setIndex(index-1)
	else
	    setIndex(props.imgs.length-1)
    }
    const handleNxtBtn = (e)=> {
	e.preventDefault();
	if(index+1 < props.imgs.length)
	    setIndex(index+1)
	else
	    setIndex(0)
	console.log(index)
    }
    
    return(<Alb>
	       <img src={props.imgs[index]}/>
	       <PrvBtn  onClick={handlePrvBtn}>&larr;</PrvBtn>
	       <NxtBtn onClick={handleNxtBtn}>&rarr;</NxtBtn>
	   </Alb>)
}

export default Album
