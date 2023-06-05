/* eslint-disable camelcase */
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { knex } from '../database'
import { checkSessionIdExists } from '../middlewares/check-session-id-exists'

export async function dietRoutes(app: FastifyInstance) {
  app.get(
    '/',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, reply) => {
      const sessionIdSchema = z.object({
        sessionId: z.string().uuid(),
      })

      const { sessionId } = sessionIdSchema.parse(request.cookies)
      const user = await knex('users').where({ session_id: sessionId }).first()

      if (!user) {
        return reply.status(403).send({
          status: 'error',
          data: 'Session ID does not exist',
        })
      }

      const dietList = await knex('diet').where({ user_id: user.id })

      return {
        status: 'success',
        data: dietList,
      }
    },
  )

  app.post(
    '/',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, reply) => {
      const sessionIdSchema = z.object({
        sessionId: z.string().uuid(),
      })

      const { sessionId } = sessionIdSchema.parse(request.cookies)
      const user = await knex('users').where({ session_id: sessionId }).first()

      if (!user) {
        return reply.status(403).send({
          status: 'error',
          data: 'Session ID does not exist',
        })
      }

      const createTransactionBodySchema = z.object({
        name: z.string(),
        description: z.string(),
        date: z.string(),
        hours: z.string(),
        is_diet: z.boolean().default(false),
      })

      const { name, description, date, hours, is_diet } =
        createTransactionBodySchema.parse(request.body)

      const [dietCreate] = await knex('diet')
        .insert({
          name,
          description,
          date,
          hours,
          is_diet,
          user_id: user.id,
        })
        .returning('*')

      return {
        status: 'success',
        data: dietCreate,
      }
    },
  )

  app.put(
    '/:id',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, reply) => {
      const sessionIdSchema = z.object({
        sessionId: z.string().uuid(),
      })

      const { sessionId } = sessionIdSchema.parse(request.cookies)
      const user = await knex('users').where({ session_id: sessionId }).first()

      if (!user) {
        return reply.status(403).send({
          status: 'error',
          data: 'Session ID does not exist',
        })
      }

      const createUserParamsSchema = z.object({
        id: z
          .number({
            coerce: true,
          })
          .int(),
      })
      const { id } = createUserParamsSchema.parse(request.params)

      const createUserBodySchema = z.object({
        name: z.string(),
        description: z.string(),
        date: z.string(),
        hours: z.string(),
        is_diet: z.boolean().default(false),
      })

      const { name, description, date, is_diet, hours } =
        createUserBodySchema.parse(request.body)

      const [diet] = await knex('diet')
        .update({
          name,
          description,
          date,
          is_diet,
          hours,
          user_id: user.id,
        })
        .where({
          id,
          user_id: user.id,
        })
        .returning('*')

      return {
        status: 'success',
        data: diet,
      }
    },
  )

  app.delete(
    '/:id',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, reply) => {
      const sessionIdSchema = z.object({
        sessionId: z.string().uuid(),
      })

      const { sessionId } = sessionIdSchema.parse(request.cookies)
      const user = await knex('users').where({ session_id: sessionId }).first()

      if (!user) {
        return reply.status(403).send({
          status: 'error',
          data: 'Session ID does not exist',
        })
      }

      const createUserParamsSchema = z.object({
        id: z
          .number({
            coerce: true,
          })
          .int(),
      })
      const { id } = createUserParamsSchema.parse(request.params)

      const hasDeleted = await knex('diet').delete().where({
        id,
        user_id: user.id,
      })

      return {
        status: 'success',
        data: (hasDeleted && id) || null,
      }
    },
  )
}
