export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5eb47d2c65fde37f7c243c1a',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-jpxz26fd',
                  apiId: '88e8bc19-c964-4f4d-a117-01a406b73cb1'
                },
                {
                  buildHookId: '5eb47d2c3eca3be8b0dd32fa',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-7c6wfsaw',
                  apiId: '63c7a4c4-419e-4294-985c-6e5acb15e531'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/helloindustry/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-7c6wfsaw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
