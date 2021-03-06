latestVersion = "0.42.0b0"

module.exports = {
  siteMetadata: {
    title: `Ward`,
    latestVersion,
    githubVersionUrl: `https://github.com/darrenburns/ward/releases/tag/release%2F${latestVersion}`,
    description: `A modern Python testing framework for finding flaws faster.`,
    author: `@_darrenburns`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
          }
        ]
      }

    },
    {
      resolve: `gatsby-plugin-algolia-docsearch`,
      options: {
        apiKey: "6566bf9cc0d24e52dd892df1208f9c1b", // required
        indexName: "wardpy", // required
        inputSelector: "#doc-search", // required
        debug: false // (bool) Optional. Default `false`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID || "",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/assets/markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mdx`,
        path: `${__dirname}/src/pages/docs`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,

            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_WARD_ACCESS_TOKEN}` || "",
        },
        queries: [
          `{
            repository(name: "ward", owner: "darrenburns") { 
              url
              forkCount
              stargazers {
                totalCount
              }
            }
          }`,
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `docs`,
        remote: `https://github.com/darrenburns/ward.git`,
        branch: `master`,
        patterns: `docs/**`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ward Documentation`,
        short_name: `Ward Docs`,
        start_url: `/`,
        background_color: `#272a36`,
        theme_color: `#272a36`,
        display: `minimal-ui`,
        icon: `src/images/ward-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
