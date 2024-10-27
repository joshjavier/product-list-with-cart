import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    label: 'Placeholder',
  },
}

export const WithIcon: Story = {
  args: {
    label: 'Add to Cart',
    icon: 'cart',
  },
}

export const Primary: Story = {
  args: {
    label: 'Placeholder',
    type: 'primary',
    size: 'large',
  },
}
