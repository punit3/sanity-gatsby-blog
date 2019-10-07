export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d9ad82a719a42e5a93c9d7e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-gfypo1ch',
                  apiId: '2699be0a-3916-49a8-b1a7-7fb0ed38b0f9'
                },
                {
                  buildHookId: '5d9ad82a8058a2871526f625',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-r6nq45u1',
                  apiId: 'ec80777e-3412-4fb5-a9aa-cbdbc9d4b42b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/punit3/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-r6nq45u1.netlify.com', category: 'apps'}
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
