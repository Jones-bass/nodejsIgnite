import Fastify from 'fastify'

import { fastifyCors } from '@fastify/cors'

import { dietRoutes } from './routes/diet'

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(fastifyCors, {
    origin: true,
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
