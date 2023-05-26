import { FastifyInstance } from 'fastify'
import { register } from '../users/register'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
}
