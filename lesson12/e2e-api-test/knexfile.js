module.exports = {
  test: {
    client: 'better-sqlite3',
    connection: ':memory:',
    useNullAsDefault: true,
    migrations: { directory: './src/migrations' }
  }
};
