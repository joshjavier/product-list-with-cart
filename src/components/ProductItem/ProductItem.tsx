import { useCart } from 'react-use-cart'
import { CartItem, Product } from '../../data/entities'
import AddToCart from '../AddToCart'
import { formatPrice } from '../../utils'

export interface Props {
  product: Product
}

export default function ProductItem({ product }: Props) {
  const { updateItemQuantity, removeItem, addItem, inCart, getItem } = useCart()
  const quantityInCart = (getItem(product.id) as CartItem)?.quantity
  const formattedPrice = formatPrice(product.price)

  const updateCart = (quantity: number) => {
    if (!inCart(product.id)) {
      addItem(product, quantity)
    } else if (quantity === 0) {
      removeItem(product.id)
    } else {
      updateItemQuantity(product.id, quantity)
    }
  }

  return (
    <article className={`product-item ${inCart(product.id) ? 'in-cart' : ''}`}>
      <div className="image">
        <img src={product.image.desktop} alt="" />
        <AddToCart callback={updateCart} initialQuantity={quantityInCart} />
      </div>
      <div className="info">
        <p className="category">{product.category}</p>
        <p className="name">{product.name}</p>
        <p className="price">{formattedPrice}</p>
      </div>
    </article>
  )
}
