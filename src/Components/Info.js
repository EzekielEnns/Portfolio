/*
Info 
   using markdown creates and a img creates a tab with either a right aligned 
   or left aligned image
Props
   className: css class for 
   content: is a array filled with objects of {title,text} with either being nullable
*/
import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import Images from './Images.js'

function Info({align, children, img}){

    const Information = styled.div`
&{
    display:flex;
    padding:10%;
    justify-content:center;
    ${align==='Right'?'flex-direction:row-reverse;':null}
    gap:10%;
}

&>div{
    max-width:50%;
   
}

& img{
    width:50%;
    height:50%;
    border:3px solid black;
    align-self:center;
}

@media only screen and (max-width:600px){
   /* &{flex-direction:column;text-align:center;}*/
    
}

`;
    return(<Information>
	       <div>
		   <ReactMarkdown>
		       {children}
		   </ReactMarkdown>
	       </div>
	       <Images index={0}>{[img]}</Images>
	   </Information>)
}

export default Info
/*
import ReactMarkdown from 'react-markdown';
<ReactMarkdown>{
## AspNet Course at Nait
Nait 2020 CNT course that covers ASP.Net basic topics  
### what I learned 
- Basic Controls
- CrossPage Controls
- Data Aware Controls
- ASP ADO 
- ADO Stored Procedures
- ADO data manipulation`
		   }
		   </ReactMarkdown>
*/
