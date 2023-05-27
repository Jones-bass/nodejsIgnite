import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { RegisterUseCase } from '../../../useCases/register'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerBodySchema.parse(request.body)

  try {
    await RegisterUseCase({
      email,
      name,
      password,
    })
  } catch (err) {
    return reply.status(409).send()
  }

  return reply.status(201).send()
}
