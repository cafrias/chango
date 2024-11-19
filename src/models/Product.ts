import type { Entity } from '@/models/Entity'
import type { Category } from '@/models/Category'

export interface Product extends Entity {
  barcode?: string;
  name: string;
  brand: string;
  category: Category;
}
