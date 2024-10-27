import type { Meta, StoryObj } from '@storybook/react'

import Icon from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
}

export default meta
type Story = StoryObj<typeof Icon>

export const Add: Story = {
  args: {
    variant: 'add',
  },
}

export const Subtract: Story = {
  args: {
    variant: 'subtract',
  },
}

export const Remove: Story = {
  args: {
    variant: 'remove',
  },
}

export const Cart: Story = {
  args: {
    variant: 'cart',
  },
}
