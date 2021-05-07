import React from 'react';
import styled from 'styled-components';

import lMode from '../Resources/lMode.png'
import dMode from '../Resources/dMode.png'


function ThemeToggle({theme, toggleFunc}){
    const Btn = styled.input`
                padding:1% 0 0 1%;
                float:right;
                width:50px;
                height:50px;`;
    
    return (<Btn type="image"
		   src={theme==='light'?lMode:dMode}
		   onClick={toggleFunc}/>)
}
export default ThemeToggle;
