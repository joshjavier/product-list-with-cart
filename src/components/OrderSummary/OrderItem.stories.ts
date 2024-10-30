import type { Meta, StoryObj } from '@storybook/react'

import OrderItem from './OrderItem'

const meta: Meta<typeof OrderItem> = {
  component: OrderItem,
}

export default meta
type Story = StoryObj<typeof OrderItem>

export const Default: Story = {
  args: {
    item: {
      id: 'tiramisu',
      name: 'Classic Tiramisu',
      quantity: 1,
      price: 5.50,
      itemTotal: 5.50,
      image: {
        thumbnail: './assets/images/image-tiramisu-thumbnail.jpg',
      },
    },
  },
}
