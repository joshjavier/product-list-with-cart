import type { Meta, StoryObj } from '@storybook/react'

import CartItem from './CartItem'

const meta: Meta<typeof CartItem> = {
  component: CartItem,
}

export default meta
type Story = StoryObj<typeof CartItem>

export const Default: Story = {
  args: {
    item: {
      id: '1',
      name: 'Classic Tiramisu',
      quantity: 1,
      price: 5.50,
    },
  },
}
