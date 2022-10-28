import React from "react"
import { graphql, Link } from "gatsby"
import * as style from "./template.module.css"
import * as powerline from "./powerline.module.css"
import {useLocation} from "@reach/router";
import { MDXProvider } from "@mdx-js/react";
import { FaBeer, FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

export const TempBody = ({id='',children}) => (
      <div className={style.content} >
        <div className={style.mdx}id={id} > {children} </div>
      </div>
)


export default function Template({children}) {
  const {pathname}= useLocation();
  return (
  <>
    <div id="main">
      {/*TODO on scroll event to update page url and location and buttons*/}
      <MDXProvider components={
          {Section:props => 
              <div 
                className={style.content} id={props?.name??''}>
                <div className={style.mdx}> {props.children} </div>
              </div>
          }
       }>
          {children}
      </MDXProvider>
    </div>
    <div className={[style.nav, powerline.powerline, powerline.draculaBackground].join(' ')}>
        <span className={[powerline.front, powerline.draculaCyan, pathname!='/Portfolio/'?powerline.draculaGreen:''].join(' ')}>
           <Link to="/">Home</Link> 
        </span> 
        <span className={[powerline.powerlineComponent, powerline.notCurrent].join(' ')}>
        </span> 
        <span className={[powerline.powerlineComponent,powerline.side ].join(' ')}>
            <a href="https://www.linkedin.com/in/ezekiel-enns/" target="_blank"> <FaLinkedin/> </a> 
            <a href="https://github.com/EzekielEnns" target="_blank"> <FaGithub/> </a>
            <a href="mailto:  ezekiel.enns@pm.me" target="_blank"> <FaMailBulk/> </a>
        </span> 
    </div>
 </>)
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id } ) {
      frontmatter {
        purpose
      }
    }
  }
`

//TODO install components needed for mdx (code displayer) 
//https://www.chartjs.org/docs/latest/samples/other-charts/radar-skip-points.html
//TODO make components for mdx (center text option)
