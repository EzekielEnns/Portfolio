import * as path from "path"
const mdxtemplate = path.resolve(`src/templates/mdxtemplate.tsx`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMdx {
          nodes {
            id,
            frontmatter {
              title
              type
            },
            internal {
              contentFilePath
            }
          }
      },
      allSitePage {
        nodes {
          path,
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
  }
  result.data.allMdx.nodes.forEach(node => {
    let isIndex = node.frontmatter.type == "index" || node.frontmatter.title == 'index';
    let isProject = node.frontmatter.type == "project";
    let isAbout = node.frontmatter.type == "about";
    let path = `/${isProject?'projects':''}${isAbout?'about':''}${!isIndex?`/${node.frontmatter.title}`:'/'}`;
    console.log(path)
    createPage({
      path: path,
      component:`${mdxtemplate}?__contentFilePath=${node.internal.contentFilePath}` ,
      context: {
        type: node.frontmatter.type, // "Using a Theme"
        id: node.id
      },
    })
  })
}
