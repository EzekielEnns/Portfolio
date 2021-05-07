import React from 'react';
import styled from 'styled-components';

import darkProfile from '../Resources/dProfile.jpeg';
import lightProfile from '../Resources/lProfile.jpeg';

function Header({theme}){

    const Head = styled.div`
        margin:0 auto;
        text-align:center;
        padding:10%;
        padding-top:1%;`;
    
    const Img = styled.img`
        border-radius:100%;
        width: 30%;`;
    const Name = styled.h1`
        color:${theme==='light'?'black':'white'};
        font-style:italic;`;
    
    return(<Head>
	       <Img src={theme==='light'?lightProfile:darkProfile}/>
	       <Name>Ezekiel Enns</Name>
	   </Head>)
}

export default Header
