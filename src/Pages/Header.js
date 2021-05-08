import React from 'react';
import styled from 'styled-components';

import dReff from '../Resources/dProfile.jpeg';
import lReff from '../Resources/lProfile.jpeg';

import Images from '../Components/Images.js'

function Header({theme}){
    const Head = styled.div`
      &{  
        margin:0 auto;
        text-align:center;
        padding:10%;
        padding-top:1%;
       }

       & img{
        border-radius:100%;
        width: 30%;
       }`;
    
    const Name = styled.h1`
        color:${theme==='light'?'black':'white'};
        font-style:italic;`;
    
    return(<Head>
	       <Images index={theme==='light'?1:0}>
		   {dReff}
		   {lReff}
	       </Images>
	       <Name>Ezekiel Enns</Name>
	   </Head>)
}

export default Header
