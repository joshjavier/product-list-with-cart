import type { Meta, StoryObj } from '@storybook/react'

import Infobox from './Infobox'
import Icon from '../Icon'

const meta: Meta<typeof Infobox> = {
  component: Infobox,
}

export default meta
type Story = StoryObj<typeof Infobox>

export const Default: Story = {
  args: {
    children: <span>This is a <strong>carbon-neutral</strong> delivery</span>,
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Icon variant="carbon-neutral" />
        <span>This is a <strong>carbon-neutral</strong> delivery</span>
      </>
    ),
  },
}
