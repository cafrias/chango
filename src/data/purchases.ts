import type { Purchase } from '@/models/Purchase'
import { faker } from '@faker-js/faker'
import { products } from '@/data/products'
import { stores } from '@/data/stores'
import { users } from '@/data/users'

export const purchases: Purchase[] = [
  {
    id: 1,
    createdAt: faker.date.recent({ days: 2 }),
    store: stores[0],
    user: users[0],
    items: [
      {
        id: 1,
        price: faker.number.int({min: 100, max: 10_000}),
        product: products[0]
      }
    ]

  }
]
