import { faker } from '@faker-js/faker'
import type { User } from '@/models/User'

export const users: User[] = [
  {
    id: faker.number.int({ min: 0 }),
    email: faker.internet.email(),
  }
]
