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

importAll(require.context('../Pictures/', false, /\.(png|jpe?g|svg|jpg)$/));

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
	       <Project name={'Advanced Programing'} imgs={cache['AP']}>
		   {
`# Advanced Programing
NAIT C# course that went over basic, indetmediate and Advanced Programing Topics including desgin princibles and algorithums 
## What I learned
- C# advanced topics
- Desgining and creating Abstraction layers
- Generic and reusable code desgin
- Task-Based Asynchronous Model
- Libary desgin
- C# Interfaces
- Sorting Algorithums
- Core Algorithum Desgin`
		   }
	       </Project>
	       <Project name={'Php'} imgs={cache['Php']}>
		   {
`# PHP
Nait Course that covered PHP frontend, backend and implmenting REST
## What I learned
- LAMP setup and configuration
- PHP front-end
- PHP Authorization
- mysql and PHP myAdmin
- Data Manipulation
- PHP Ajax Requests
- PHP REST API`
		   }
	       </Project>
	       <Project name={'Embeded Systems'} imgs={cache['EmbSys']}>
		   {
`# Embeded Systems
Nait course that covers embeded systems
each project on this course buildt ontop of each other requiring new libaries to be built 
this is only one of the projects but the libaries are the main part of this course
## What I learned
- C programing
- Assembly
- Low Level hardware programing
- LCD Controller
- Driver Code
- Interrupts
- A to D Conversion
- I2C Bus`
		   }
	       </Project>
	       <Project name={'Databases'} imgs={cache['Database']}>
		   {
`# Database Course
A Nait course that convers sql and database desgin, this is only one major project from the course
but it gives an idea of what it entails
## What I learned
- Data reterival
- Database contraints
- Subqueries
- Modifers (top, join, unions...)
- Aggregate functions and Grouping
- Filtering grouped Data
- Database Creation Scripting
- Stored Procedures
- Data Insertion (Update, Delete...)
- Database Desgin
- Database Normalization
- Transactions/Triggers`
		   }
	       </Project>
	       <Project name={'Profestional Practice'} imgs={cache['PP']}>
		   {
`# Professional Practice
NAIT course that covered devOp practices: life cycles, team dynamics and project managment/reports 
## What I learned
- Project Proposal (Charter, WBS, schedule, Scope)
- Rick Registers and Matrices
- Gantt Charts
- Network Diagrams (CPM, PERT)
- Traditional Dev Cycles (waterfall, RAD...)
- Agile Development Life Cycles
- Sprints are fun!
- Team performance methodologies
- project risk assement and the Human factor`
		   }
	       </Project>
	       <Project name={'Screen Tomb'} imgs={cache['ScreenTomb']}>
		   {
`# Screen Tomb
A little failed side project for managing D&D information.
## Why it failed
When doing this I didnt understand how to optimize javascript
also the Object Oriented programing was implmented poorly.
Another reason was the UI, it was a text based UI, very complicated.
I plan to fix it up eventually
## What I learned
- Javascript optimization
- Dom manipulation
- UI Desgin princibles`
		   }
	       </Project>
	   </div>);
/*
	       <Project name={} imgs={cache[]}>
	       {}
	       </Project>
*/
}
export default Portfolio
