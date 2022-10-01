import React from "react"
import { graphql, Link } from "gatsby"
import * as style from "./template.module.css"
import * as powerline from "./powerline.module.css"

export default function Template({ data: {mdx}, children}) {

  return (
  <>
    <div className={style.contentWrapper}>
      <div className={style.content}>
        <div className={style.mdx}>{children}</div>
      </div>
    </div>
    <div className={[style.nav, powerline.powerline, powerline.draculaBackground].join(' ')}>
        <span className={[powerline.front, powerline.draculaCyan].join(' ')}>
           <Link to="/about">About</Link> 
        </span> 
        <span className={[powerline.powerlineComponent, powerline.draculaOrange].join(' ')}>
           <Link to="/project">Projects</Link> 
        </span> 
        <span className={[powerline.powerlineComponent, powerline.draculaPurple].join(' ')}>
           <Link to="/Contact">Contact</Link> 
        </span> 
        <span className={[powerline.powerlineComponent,powerline.side ].join(' ')}>
           <text>{mdx.frontmatter.type}</text>
        </span> 
    </div>
 </>)
}
export const pageQuery = graphql`
  query($type: String!) {
    mdx(frontmatter: { type: { eq: $type } }) {
      frontmatter {
        title,
        type
      }
    }
  }
`
//TODO export to general template for all pages
//TODO implement this https://stackoverflow.com/questions/55512817/is-it-possible-to-change-route-on-scroll
//TODO implement projects with url paramiters 
//TODO install components needed for mdx (code displayer) 
//TODO make components for mdx (center text option)
