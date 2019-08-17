/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 const path = require('path')

module.exports = {
  pathPrefix: "/juno-test",
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
    // {
    //   resolve: "gatsby-plugin-hubspot",
    //   options: {
    //       trackingCode: "6289591",
    //       respectDNT: true,
    //       productionOnly: false,
    //   },
    // }
  ]
}
