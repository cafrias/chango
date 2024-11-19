import type { Entity } from '@/models/Entity'
import type { User } from '@/models/User'
import type { Store } from '@/models/Store'
import type { PurchaseItem } from '@/models/PurchaseItem'

export interface Purchase extends Entity {
  user: User;
  store: Store;
  createdAt: Date;
  items: PurchaseItem[];
}
