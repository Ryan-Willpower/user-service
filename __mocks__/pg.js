const pg = jest.genMockFromModule('pg')

class Pool {
  async query() {
    return 'success'
  }
}

pg.Pool = Pool

module.exports = pg
