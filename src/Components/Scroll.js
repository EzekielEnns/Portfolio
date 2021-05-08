import React, {useState} from 'react';
import styled from 'styled-components';

function Scroll(){
    const [visible, setVisible] = useState(false);

    const toggle = () => {
	const scrolled = document.documentElement.scrollTop;
	if(scrolled > 450) setVisible(true);
	else setVisible(false);
    }

    const toTop = () =>window.scrollTo({top:0,behavior:'smooth'});
    window.addEventListener('scroll', toggle);

    const Btn = styled.button`
                margin:0 1%;
                position:fixed;
                display:${visible?'inline':'none'};
                bottom:5%;
                width:40px;
                height:40px;
                background-color:transparent;
                color:black;
                font-size:1.5em;
                border-radius:100%;
                border:1px solid black
                transition:opacity 1s;`;
    
    return(<Btn className={visible?'vis':null} onClick={toTop}>&uarr;</Btn>)
}

export default Scroll;
