export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cf8a2cbe078d9595e73ff2c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-htagvzum',
                  apiId: '7ab1a842-ebf2-416c-b9ec-bc8ed638aa26'
                },
                {
                  buildHookId: '5cf8a2cbe28c4efc39eb8799',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-u12hcw1s',
                  apiId: 'd990d8ce-aa2f-4aa7-a39f-08dc20159b72'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/carlospb/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-u12hcw1s.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
