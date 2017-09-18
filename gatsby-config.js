require("dotenv").config();

module.exports = {
    siteMetadata: {
        title: "Adriansson Advokatbyrå AB"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-styled-components",
        {
            resolve: "gatsby-source-contentful",
            options: {
                spaceId: "23egy2u19di5",
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        "gatsby-transformer-remark"
    ]
};
