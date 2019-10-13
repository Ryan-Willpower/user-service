import { UserInfo } from '../../interfaces/register'
import RegisterService from '../../services/register'
import { pool } from '../../loaders/pg'

export default {
  Mutation: {
    register: async (_parent: any, args: UserInfo) => {
      const registerService = new RegisterService(
        args.username,
        args.passwd,
        pool
      )
      const result = await registerService.Register()
      return result
    },
  },
}
