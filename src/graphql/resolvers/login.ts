import { pool } from '../../loaders/pg'
import AuthService from '../../services/auth'
import { UserInfo } from '../../interfaces/auth'

export default {
  Query: {
    login: async (_parents: any, args: UserInfo) => {
      const auth = new AuthService(args.username, args.passwd, pool)
      const result = await auth.login()
      return result
    },
  },
}
