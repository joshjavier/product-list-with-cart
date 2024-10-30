import type { Meta, StoryObj } from '@storybook/react'
import { CartProvider } from 'react-use-cart'

import Cart from './Cart'
import * as CartListStories from '../CartList/CartList.stories'

const meta: Meta<typeof Cart> = {
  component: Cart,
}

export default meta
type Story = StoryObj<typeof Cart>

export const Default: Story = {
  args: {
    initialItems: CartListStories.testItems,
  },
  decorators: [
    Story => (
      <CartProvider id="defaultcart">
        <Story />
      </CartProvider>
    ),
  ],
}

export const Empty: Story = {
  decorators: [
    Story => (
      <CartProvider id="emptycart">
        <Story />
      </CartProvider>
    ),
  ],
}
