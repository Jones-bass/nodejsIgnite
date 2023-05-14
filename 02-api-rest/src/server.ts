import Fastify from 'fastify'

import cookie from '@fastify/cookie'
import { fastifyCors } from '@fastify/cors'

import { transactionsRoutes } from './routes/transactions'

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(fastifyCors, {
    origin: true,
  })

  await fastify.register(cookie)

  await fastify.register(transactionsRoutes, {
    prefix: 'transactions',
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
