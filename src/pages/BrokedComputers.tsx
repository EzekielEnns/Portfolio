import React from 'react'
import "./index.css"
import { graphql} from "gatsby"
import * as style from "./testing.module.css"

export default function testing({children,data}){ 
    const page: any = data.allMdx.nodes[0];

    return(
    <div id="container">
        <h1 className={style.title}>{page.frontmatter.title}</h1>
        <div className={style.content}>
            {page.body.split('\n\n').map((e:String , i:Number) => <p id={`${i}`}>{e}</p>)} 
        </div>
    </div>
    )
}

export const query = graphql`
query MyQuery {
  allMdx(filter: {frontmatter: {title: {eq: "Broked Computer Inc"}}}) {
    nodes {
      frontmatter {
        title
      }
      body
    }
  }
}
`
