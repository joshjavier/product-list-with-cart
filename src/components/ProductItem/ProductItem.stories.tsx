import type { Meta, StoryObj } from '@storybook/react'
import { CartProvider } from 'react-use-cart'

import ProductItem from './ProductItem'
import { Product } from '../../data/entities'

const testItems: Product[] = [
  {
    id: '1',
    image: { desktop: './assets/images/image-waffle-desktop.jpg' },
    name: 'Waffle with Berries',
    category: 'Waffle',
    price: 6.50,
  },
  {
    id: '2',
    image: { desktop: './assets/images/image-creme-brulee-desktop.jpg' },
    name: 'Vanilla Bean Crème Brûlée',
    category: 'Crème Brûlée',
    price: 7.00,
  },
]

const meta: Meta<typeof ProductItem> = {
  component: ProductItem,
  decorators: [
    Story => (
      <CartProvider defaultItems={[{ ...testItems[1], quantity: 4 }]}>
        <Story />
      </CartProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ProductItem>

export const Default: Story = {
  args: {
    product: testItems[0],
  },
}

export const InCart: Story = {
  args: {
    product: testItems[1],
  },
}
