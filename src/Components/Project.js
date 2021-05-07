import React from 'react';
import ReactMarkdown from 'react-markdown';
import Album from './Album.js'
import styled from 'styled-components';

function Project(props){

    const Proj = styled.div`
&{
    display:flex;
    margin:0 auto;
    padding:10%;
    align-items:center;
    justify-content:center;
    text-align:left;
    gap:1%;
}

& li{
    text-align:left;
    padding:0;
}

& ul {
    margin:0;
    padding-left:10%;
}

`;
    
    return(<Proj>
	       <Album imgs={props.imgs}/>
	       <div className="Summary">
		   <ReactMarkdown>
		       {props.children}
		   </ReactMarkdown>
	       </div>
	   </Proj>)
}

export default Project
