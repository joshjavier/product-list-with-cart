import type { Meta, StoryObj } from '@storybook/react'
import type { Item } from 'react-use-cart'

import OrderSummary from './OrderSummary'
import { Order, Product } from '../../data/entities'

export const testItems: (Item & Pick<Product, 'image'>)[] = [
  {
    id: 'tiramisu',
    name: 'Classic Tiramisu',
    quantity: 1,
    price: 5.50,
    itemTotal: 5.50,
    image: { thumbnail: './assets/images/image-tiramisu-thumbnail.jpg' },
  },
  {
    id: 'cremebrulee',
    name: 'Vanilla Bean Crème Brûlée',
    quantity: 4,
    price: 7.00,
    itemTotal: 28,
    image: { thumbnail: './assets/images/image-creme-brulee-thumbnail.jpg' },
  },
  {
    id: 'pannacotta',
    name: 'Vanilla Panna Cotta',
    quantity: 2,
    price: 6.50,
    itemTotal: 13,
    image: { thumbnail: './assets/images/image-panna-cotta-thumbnail.jpg' },
  },
]

const meta: Meta<typeof OrderSummary> = {
  component: OrderSummary,
  excludeStories: ['testItems'],
}

export default meta
type Story = StoryObj<typeof OrderSummary>

export const Default: Story = {
  args: {
    order: new Order(testItems),
  },
}
