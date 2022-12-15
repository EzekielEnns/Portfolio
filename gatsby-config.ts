import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix:"/Portfolio",
  siteMetadata: {
    title: `EzekielEnns`,
    siteUrl: `https://ezekielenns.github.io/Portfolio/`
  },
  graphqlTypegen: true,
  plugins: [
      "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", 
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          "icon": "src/images/icon.png"
        }
      }, 
      "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          "name": "images",
          "path": "./src/images/"
        },
        __key: "images"
      }, 
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          "name": "pages",
          "path": "./src/pages/"
        },
        __key: "pages"
      },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              "name":"content",
              "path":`${__dirname}/content/`
          },
      },
  ],
};

export default config;
