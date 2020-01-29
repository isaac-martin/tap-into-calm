export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e32107bfe161e7b0dcf89b0',
                  title: 'Sanity Studio',
                  name: 'tap-into-calm-studio',
                  apiId: 'eade7be1-23e2-46a1-bc8c-198b5c99f88d'
                },
                {
                  buildHookId: '5e32107bfe161ebccecf89a1',
                  title: 'Blog Website',
                  name: 'tap-into-calm',
                  apiId: 'a1891d6e-e222-416f-bbc7-6f74911baae8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/isaac-martin/tap-into-calm',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://tap-into-calm.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
