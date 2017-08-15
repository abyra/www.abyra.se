module.exports = {
    siteMetadata: {
        title: `Adriansson`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        {
            resolve: "gatsby-plugin-typography",
            options: {
                pathToConfigModule: "src/typography"
            }
        }
    ]
};
