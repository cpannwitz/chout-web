module.exports = {
  client: {
    service: 'chout-server@development',
    excludes: ['src/generated/**']
    // service: 'chout-server@devevlopment'
    // service: {
    //   name: 'chout-server',
    //   url: 'http://localhost:4000/graphql'
    // }
  }
}
