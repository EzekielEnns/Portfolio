import React from "react"
import { graphql, Link } from "gatsby"
import * as style from "./template.module.css"
import * as powerline from "./powerline.module.css"
import {useLocation} from "@reach/router";
import { MDXProvider } from "@mdx-js/react";

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
        <span className={[powerline.front, powerline.draculaCyan].join(' ')}>
           <Link to="/Portfolio/#about">About</Link> 
        </span> 
        <span className={[powerline.powerlineComponent, powerline.draculaOrange,powerline.notCurrent].join(' ')}>
           <Link to="/Portfolio/#projects">Projects</Link> 
        </span> 
        <span className={[powerline.powerlineComponent, powerline.draculaPurple, powerline.notCurrent].join(' ')}>
           <Link to="/Portfolio/#contact">Contact</Link> 
        </span> 
        <span className={[powerline.powerlineComponent,powerline.side ].join(' ')}>
           {'-- '+pathname.split("/")[1]+' --'}
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
