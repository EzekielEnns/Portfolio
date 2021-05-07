import {useEffect, useState} from 'react';

export const useTheme = () =>{
    const [theme,setTheme] = useState('light');

    const setMode = mode => {
	//local storage to allow for presistant theme
	window.localStorage.setItem('theme',mode)
	setTheme(mode);
    }

    const toggleFunc = () =>
	  theme=== 'light'?setMode('dark'): setMode('light');

    useEffect(()=>{
	const localtheme = window.localStorage.getItem('theme')
	localtheme && setTheme(localtheme);
	
    },[]);

    return [theme, toggleFunc]
};
