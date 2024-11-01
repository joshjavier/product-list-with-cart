import { Item } from 'react-use-cart'

export interface Product {
  id: string
  image: {
    [key in 'thumbnail' | 'mobile' | 'tablet' | 'desktop']?: string
  }
  name: string
  category: string
  price: number
}

export class Order {
  constructor(
    public items: (Item & Pick<Partial<Product>, 'image'>)[],
  ) {}

  get total(): number {
    return this.items.reduce((total, item) => total + item.itemTotal!, 0)
  }
}
