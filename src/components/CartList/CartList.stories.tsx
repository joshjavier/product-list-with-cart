import type { Meta, StoryObj } from '@storybook/react'
import type { Item } from 'react-use-cart'

import CartList from './CartList'

export const testItems: Item[] = [
  {
    id: 'tiramisu',
    name: 'Classic Tiramisu',
    quantity: 1,
    price: 5.50,
  },
  {
    id: 'cremebrulee',
    name: 'Vanilla Bean Crème Brûlée',
    quantity: 4,
    price: 7.00,
  },
  {
    id: 'pannacotta',
    name: 'Vanilla Panna Cotta',
    quantity: 2,
    price: 6.50,
  },
]

const meta: Meta<typeof CartList> = {
  component: CartList,
  excludeStories: ['testItems'],
}

export default meta
type Story = StoryObj<typeof CartList>

export const Default: Story = {
  args: {
    items: testItems,
  },
}
