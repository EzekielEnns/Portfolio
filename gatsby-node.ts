import * as path from "path"
const Template = path.resolve(`src/templates/template.tsx`)
const Projhome = path.resolve(`src/templates/projhome.tsx`)

exports.createPages = async ({ actions, graphql }) => {

    //TODO fix query
  const { createPage } = actions
  const mdxPrm = graphql(`
    {
      allMdx {
          nodes {
            id,
            frontmatter {
                purpose 
            },
            internal {
              contentFilePath
            }
          }
      },
    }
  `).then((result : any)=>{
      if (result.errors) {
        console.error(result.errors)
      }
      result.data.allMdx.nodes.forEach((node : any) => {
        if(node.internal.contentFilePath.includes("projhome")){return}

        let path = node.internal.contentFilePath .split('/').pop().slice(0,-4)
        path = path=='Portfolio'? '/':path
        createPage({
          path: path,
          component:`${Template}?__contentFilePath=${node.internal.contentFilePath}` ,
          context: {
            id: node.id
          },
        })
      })
  }) 

  //TODO make a query
  const projPrm = new Promise((res)=> {
      (['Backend', 'Devops','Frontend', 'Systems', 'Apps']).forEach((type : String) => {
        createPage({
            path:'Projects/'+type,
              component:`${Projhome}?__contentFilePath=${path.resolve(`content/projhome/${type}.mdx`)}` ,
              context: {
                  type: type
            },
        })  
        
      })
      res(null);
  })

  return Promise.all([mdxPrm,projPrm])
}
