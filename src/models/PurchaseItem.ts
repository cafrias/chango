import type { Entity } from '@/models/Entity'
import type { Product } from '@/models/Product'

export interface PurchaseItem extends Entity {
  product: Product;
  price: number;
}
