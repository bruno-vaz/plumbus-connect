/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 const path = require('path')

module.exports = {
  pathPrefix: "/plumbus-connect",
  proxy: {
    prefix: "/api",
    url: "https://juno-test-leads.herokuapp.com",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components")
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/
        }
      }
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Inconsolata\:400,700"
        ],
        display: "swap"
      }
    },
    `gatsby-plugin-react-helmet`
  ]
}
