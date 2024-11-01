import { Order } from '../../data/entities'
import { formatPrice } from '../../utils'
import OrderItem from './OrderItem'

export interface Props {
  order: Order
}

export default function OrderSummary({ order }: Props) {
  return (
    <article className="order-summary">
      <ul role="list" className="block-list">
        {order.items.map(item => <OrderItem key={item.id} item={item} />)}
      </ul>
      <hr className="separator" />
      <div className="order-total">
        <span>Order Total</span>
        <span>{formatPrice(order.total)}</span>
      </div>
    </article>
  )
}
