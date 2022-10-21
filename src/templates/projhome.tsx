import React from "react"
import { graphql, navigate} from "gatsby"
import Template, { TempBody } from "./template"
import "./test.css"
export default function Projhome({children,data}){
    const {allMdx:{edges:projects}} = data;
    console.log(projects)
    return(
        <Template>
            <TempBody id="test">
                {children}
                <div className="projGrid">
                {projects.map( ({node:{frontmatter,internal}},i)=>(
                    <div onClick={()=>navigate(
                        `/${internal.contentFilePath .split('/').pop().slice(0,-4)}`)}  key={i}> 
                        <h1>{internal.contentFilePath .split('/').pop().slice(0,-4)}</h1>
                        {frontmatter?.hook?? 'Comming soon'}
                    </div>)
                )}
                </div>
            </TempBody>
        </Template>
        )
}

export const query = graphql`
query ($type: [String]) {
  allMdx(
    filter: {frontmatter: {tags: {in: $type}}} 
    sort: {order: ASC, fields: frontmatter___hook}
){

    edges {
      node {
        frontmatter {
            purpose
            hook
        }
        internal {
          contentFilePath
        }
      }
    }
  }
}
`




