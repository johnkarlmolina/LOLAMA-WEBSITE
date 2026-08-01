import type { ComponentType } from 'react'

export interface MenuItem {
  id: number
  name: string
  category:
    | 'All'
    | 'Starter Box'
    | 'Premium Box'
    | 'Sari-Sari Box'
    | 'Royal Box'
    | 'Classic Cheese'
    | 'Dubai Collection'
    | 'Munkchin Bites'
  description: string
  image: string
  tag?: string
  price?: string
}

export interface FranchiseTier {
  title: string
  space: string
  capital: string
  roi: string
  featured?: boolean
  features: string[]
}

export interface ValuePoint {
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
}

export interface CoreValue {
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
}
