/* eslint-disable camelcase */
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { knex } from '../database'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    const createUserBodySchema = z.object({
      username: z.string(),
    })

    const { username } = createUserBodySchema.parse(request.body)

    let user = await knex('users')
      .where({
        username,
      })
      .first()

    if (!user) {
      const result = await knex('users')
        .insert({
          username,
          session_id: randomUUID(),
        })
        .returning('*')
      user = result[0]
    }

    reply.cookie('sessionId', user.session_id as string)

    reply.status(201).send({
      status: 'success',
      data: user,
    })
  })
}
