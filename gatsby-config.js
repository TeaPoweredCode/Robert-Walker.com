require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Robert Walker • Tea powered coder`,
    description: `Portfolio site`,
    twitterUsername: `@MrLuxan`,
    image: `./favicon.ico`,
    siteUrl: `https://www.Robert-Walker.com`,
  },
  /* Your site config here */
  plugins: [
    'gatsby-transformer-json',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,   
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projectData/`,
      },
    },
  ],
}
