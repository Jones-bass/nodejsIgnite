// eslint-disable-next-line
import { Knex } from 'knex'
// ou faça apenas:
// import 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    diet: {
      is_diet: string | undefined
      id: string
      name: string
      description: string
      hours: string
      date: string
      created_at: string
    }
  }
}
