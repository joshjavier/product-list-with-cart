export interface Product {
  id: string
  image: {
    [key in 'thumbnail' | 'mobile' | 'tablet' | 'desktop']?: string
  }
  name: string
  category: string
  price: number
}

export interface CartItem extends Product {
  quantity: number
}
