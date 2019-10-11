export const resolvers = {
  Query: {
    Users: () => {
      return [
        {
          userid: 'u01',
          username: 'ryan',
          passwd: '1234',
        },
      ]
    },
  },
}
