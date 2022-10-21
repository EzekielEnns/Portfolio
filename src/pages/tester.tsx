import React from 'react'
import { navigate } from 'gatsby'
import Template, { TempBody } from '../templates/template';
import SyntaxHighlighter from 'react-syntax-highlighter';  
import {atelierCaveDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Projects } from '../components/graphs';
//TODO remove Victory 
//TODO use https://react-chartjs-2.js.org/ 
const IndexPage  = () => {
    // return navigate('/Portfolio')
    // TODO move both to seprate components
    // TODO use pie radar
    return(
        <Template>
        <TempBody id={"test"} >
            <Projects/>
        </TempBody>
        <TempBody id={"hi"}>
            {/*https://www.npmjs.com/package/react-syntax-highlighter*/ }
            <SyntaxHighlighter showLineNumbers={true} language="javascript"style={atelierCaveDark} >
                console.log("hello world")
            </SyntaxHighlighter>
        </TempBody>
        </Template>
    )
}   


export default IndexPage

