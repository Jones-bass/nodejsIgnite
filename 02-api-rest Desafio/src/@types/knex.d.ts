// eslint-disable-next-line
import { Knex } from 'knex'
// ou faça apenas:
// import 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    users: {
      id: number
      username: string
      session_id: string | null
    }

    diet: {
      id: number
      name: string
      is_diet: boolean
      description: string
      hours: string
      date: string
      created_at: string
      user_id: number
    }
  }
}
