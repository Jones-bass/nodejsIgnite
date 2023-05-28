import { FastifyInstance } from 'fastify'
import { register } from '../users/register'
import { authenticate } from '../users/authenticate'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)

  app.post('/sessions', authenticate)
}
