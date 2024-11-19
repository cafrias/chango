import type { Store } from '@/models/Store'
import { faker } from '@faker-js/faker'

export const NUMBER_OF_STORES = 20;

export const stores: Store[] = Array.from({ length: NUMBER_OF_STORES }, (_, index) => {
  return {
    id: index + 1,
    name: faker.company.name(),
  }
})
