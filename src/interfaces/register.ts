import { Pool } from 'pg'

export interface UserInfo {
  username: String
  passwd: String
}

export interface Registration extends UserInfo {
  pool: Pool
}
