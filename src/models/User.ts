import type { Entity } from '@/models/Entity'

export interface User extends Entity {
  email: string;
}
