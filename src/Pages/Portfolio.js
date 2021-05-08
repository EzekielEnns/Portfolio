import React from 'react';
import Project from '../Components/Project.js'
const cache = {};
const pRegEx = /(\.\/)|(\d+\.\w+)/ig

//allows for a nice naming scheme [Project name][number][extention]
//and can reffrence imgs using project name
function importAll(r){
    r.keys().forEach((key) =>{
	let pName = key.replaceAll(pRegEx,"")
	let reff = r(key).default
	if(cache[pName])
	    cache[pName].push(reff)
	else
	    cache[pName] = [reff]
    });
}

importAll(require.context('../Pictures/', false, /\.(png|jpe?g|svg)$/));

function Portfolio(){
    return(<div>
	       <Project name={'AspNet'} imgs={cache['AspNet']}>
		   {
`## AspNet Course at Nait
Nait 2020 CNT course that covers ASP.Net basic topics  
### what I learned: 
- Basic Controls
- CrossPage Controls
- Data Aware Controls
- ASP ADO 
- ADO Stored Procedures
- ADO data manipulation`
}
	       </Project>

	      	<Project name={'Javascript-Css'} imgs={cache['JavaScript&Css']}>
		   {
`## Javascript-Css Course at Nait
this was part of a course called CMPE2000
it covered the basics of web development

### what I learned 
- essental jquery skills
- javascript classes
- css grids and flex boxes
- ajax requests`
}
	       </Project>
	   </div>);
}
export default Portfolio
