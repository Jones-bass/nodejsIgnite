import Fastify from 'fastify'

import cookie from '@fastify/cookie'

import { dietRoutes } from './routes/diet'
import { usersRoutes } from './routes/users'

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(cookie)

  await fastify.register(usersRoutes, {
    prefix: '/users',
  })

  await fastify.register(dietRoutes, {
    prefix: 'diet',
  })

  fastify
    .listen({
      port: 3333,
    })
    .then(() => {
      console.log('🚀 Server started on port 3333')
    })
}

bootstrap()
