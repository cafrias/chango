import type { Product } from '@/models/Product'
import { faker } from '@faker-js/faker'

const NUMBER_OF_PRODUCTS = 100;

export const products: Product[] = Array.from({  length: NUMBER_OF_PRODUCTS}, (_, index) => {
  return {
    id: index + 1,
    brand: faker.company.name(),
    name: faker.commerce.productName(),
    category: products[faker.number.int({min: 1, max: products.length})]
  }
})
