import React from 'react';
import styled from 'styled-components';

function Images({children,index}){
    let imgs = [];
    for(const reff of children){
	let tmp = new Image();
	tmp.src = reff;
	imgs.push(tmp);
    }
    return(<img src={imgs[index].src}/>)
}
export default Images;
