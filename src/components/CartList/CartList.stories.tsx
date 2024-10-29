import type { Meta, StoryObj } from '@storybook/react'

import CartList from './CartList'
import { OrderLine } from '../../data/entities'

const testItems: OrderLine[] = [
  {
    id: '1',
    name: 'Classic Tiramisu',
    quantity: 1,
    price: 5.50,
  },
  {
    id: '2',
    name: 'Vanilla Bean Crème Brûlée',
    quantity: 4,
    price: 7.00,
  },
  {
    id: '3',
    name: 'Vanilla Panna Cotta',
    quantity: 2,
    price: 6.50,
  },
]

const meta: Meta<typeof CartList> = {
  component: CartList,
}

export default meta
type Story = StoryObj<typeof CartList>

export const Default: Story = {
  args: {
    items: testItems,
  },
}
