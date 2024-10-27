import type { Meta, StoryObj } from '@storybook/react'

import AddToCart from './AddToCart'

const meta: Meta<typeof AddToCart> = {
  component: AddToCart,
}

export default meta
type Story = StoryObj<typeof AddToCart>

export const Default: Story = {}
