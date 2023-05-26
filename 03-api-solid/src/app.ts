import fastify from 'fastify'
import { appRoutes } from './http/controllers/router/routes'

export const app = fastify()

app.register(appRoutes)
