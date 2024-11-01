import type { Meta, StoryObj } from '@storybook/react'

import Modal from './Modal'
import OrderSummary from '../OrderSummary/OrderSummary'
import { Default as OrderSummaryDefault } from '../OrderSummary/OrderSummary.stories'

const meta: Meta<typeof Modal> = {
  component: Modal,
  // parameters: {
  //   layout: 'centered',
  // },
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    open: true,
    message: {
      title: 'Order Confirmed',
      description: 'We hope you enjoy your food!',
    },
  },
}

export const OrderConfirmation: Story = {
  args: {
    open: true,
    icon: 'order-confirmed',
    message: {
      title: 'Order Confirmed',
      description: 'We hope you enjoy your food!',
    },
    closeButtonLabel: 'Start New Order',
    children: <OrderSummary order={OrderSummaryDefault.args!.order!} />,
  },
}
