module.exports = ({
  currentFilterState: [
    {
      name: 'improvement',
      state: true,
    }, {
      name: 'defect',
      state: false,
    },
  ],
  team:
  {
    name: 'spoqa',
    board: [
      {
        name: 'boardName',
        list: [
          {
            name: 'todo',
            card: [
              {
                title: 'ISSUE-title',
                completed: false,
                type: 'defect',
                content: 'fsadfasfdadsfa',
                birthTime: '04-14 12:48',
              }, {
                title: 'ISSUE-title',
                completed: true,
                type: 'defect',
                content: 'fsadfasfdadsfa',
                birthTime: '04-14 12:48',
              },
            ],
          }, {
            name: 'todo1',
            card: [
              {
                title: 'ISSUE-title',
                completed: true,
                type: 'improvement',
                content: 'fsadfasfdadsfa',
                birthTime: '04-14 12:48',
              }, {
                title: 'ISSUE-title',
                completed: false,
                type: 'defect',
                content: 'fsadfasfdadsfa',
                birthTime: '04-14 12:48',
              }, {
                title: 'ISSUE-title',
                completed: false,
                type: 'improvement',
                content: 'fsadfasfdadsfa',
                birthTime: '04-14 12:48',
              },
            ],
          },
        ],
      },
    ],
  },
})