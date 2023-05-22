/* eslint-disable camelcase */
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { knex } from '../database'

export async function dietRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const diet = await knex('diet').select()

    return { diet }
  })

  app.get('/:id', async (request) => {
    const getdietParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = getdietParamsSchema.parse(request.params)

    const isdiet = await knex('diet')
      .where({
        id,
      })
      .first()

    return {
      isdiet,
    }
  })

  app.post('/', async (request, reply) => {
    const createTransactionBodySchema = z.object({
      name: z.string(),
      description: z.string(),
      date: z.string(),
      hours: z.string(),
      is_diet: z.enum(['yes', 'not']),
    })

    const { name, description, date, hours, is_diet } =
      createTransactionBodySchema.parse(request.body)

    await knex('diet').insert({
      id: randomUUID(),
      name,
      description,
      date,
      hours,
      is_diet: is_diet === 'yes' ? 'yes' : 'not',
    })

    return reply.status(201).send()
  })
}
