import React from 'react';
import styled from 'styled-components';

function Contact(){
    const Call = styled.div.attrs(()=>({tabIndex:0}))`
&{
    display:flex;
    justify-content:center;
    font-size:2em;
    padding:10%;
}

& span{
    margin-left:3%;
    text-align:center;
}

& li{
    padding:1%;
}

& li::marker{
    content:"❖";
    font-size:1em;
}

& li:nth-child(1)::marker{color: #FED1F5;}
& li:nth-child(2)::marker{color: #EAB6FE;}
& li:nth-child(3)::marker{color: #B2F0E1;}
& li:nth-child(4)::marker{color: #77E3FE;}
`;
    return(<Call>
	       <ul>
		   <li><span> 1-403-598-7077</span> </li>
		   <li><span><a href="">Linkden</a></span></li>
		   <li><span><a href="https://github.com/EzekielEnns">Github</a></span></li>
		   <li><span>ezekiel.enns@protonmail.com</span></li>
	       </ul>
	   </Call>)
}

export default Contact
