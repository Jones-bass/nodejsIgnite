import { CheckIn, Prisma } from '@prisma/client'
import { prisma } from '../../lib/prisma'
import { CheckInsRepository } from '../check-ins-repository'
import dayjs from 'dayjs'

export class PrismaCheckInsRepository implements CheckInsRepository {
  countByUserId(userId: string): Promise<number> {
    throw new Error('Method not implemented.')
  }

  findManyByUserId(userId: string, page: number): Promise<CheckIn[]> {
    throw new Error('Method not implemented.')
  }

  async create(data: Prisma.CheckInUncheckedCreateInput) {
    const checkIn = await prisma.checkIn.create({
      data,
    })

    return checkIn
  }

  async findByUserIdOnDate(userId: string, date: Date) {
    const startOfTheDay = dayjs(date).startOf('date')
    const endOfTheDay = dayjs(date).endOf('date')

    const checkIn = await prisma.checkIn.findFirst({
      where: {
        user_id: userId,
        created_at: {
          gte: startOfTheDay.toDate(),
          lte: endOfTheDay.toDate(),
        },
      },
    })

    return checkIn
  }
}
