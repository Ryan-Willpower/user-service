import { Pool } from 'pg'
import bcrypt from 'bcrypt'

export default class RegisterService {
  username: String
  passwd: String
  pool: Pool

  constructor(username: String, passwd: String, pool: Pool) {
    this.username = username
    this.passwd = passwd
    this.pool = pool
  }

  async Register() {
    try {
      const saltRounds = 10
      const hashPasswd = await bcrypt.hash(this.passwd, saltRounds)

      const query = {
        text: 'INSERT INTO users(username, passwd) VALUES($1, $2)',
        values: [this.username, hashPasswd],
      }

      await this.pool.query(query)

      return {
        status: 'done',
      }
    } catch (e) {
      console.log(e)
      throw new Error("Can't add data to db")
    }
  }
}
