import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('diet', (table) => {
    table
      .integer('user_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('users')
  })
}

export async function down(knex: Knex): Promise<void> {}
