import type { Meta, StoryObj } from '@storybook/react'

import Icon from './Icon'
import iconPlus from '../../icons/plus.svg'
import iconMinus from '../../icons/minus.svg'
import iconX from '../../icons/x.svg'
import iconCart from '../../icons/shopping-cart-plus.svg'

const meta: Meta<typeof Icon> = {
  component: Icon,
}

export default meta
type Story = StoryObj<typeof Icon>

export const Plus: Story = {
  args: {
    icon: iconPlus,
  },
}

export const Minus: Story = {
  args: {
    icon: iconMinus,
  },
}

export const Cancel: Story = {
  args: {
    icon: iconX,
  },
}

export const Cart: Story = {
  args: {
    icon: iconCart,
  },
}
