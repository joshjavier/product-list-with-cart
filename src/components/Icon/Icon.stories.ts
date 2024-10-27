import type { Meta, StoryObj } from '@storybook/react'

import Icon from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
}

export default meta
type Story = StoryObj<typeof Icon>

export const Plus: Story = {
  args: {
    icon: 'add',
  },
}

export const Minus: Story = {
  args: {
    icon: 'subtract',
  },
}

export const Cancel: Story = {
  args: {
    icon: 'remove',
  },
}

export const Cart: Story = {
  args: {
    icon: 'cart',
  },
}
