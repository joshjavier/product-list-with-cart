import { useEffect, useRef, useState } from 'react'
import Button from '../Button'

export interface Props {
  initialQuantity?: number
  callback?: (value: number) => void
}

export default function AddToCart({ initialQuantity = 0, callback }: Props) {
  const [quantity, setQuantity] = useState<number>(initialQuantity)
  const btnCart = useRef<HTMLButtonElement>(null)
  const btnPlus = useRef<HTMLButtonElement>(null)
  const btnMinus = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (quantity !== initialQuantity) {
      setQuantity(initialQuantity)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuantity])

  // Focus management
  useEffect(() => {
    // Focus add to cart button after pressing
    // minus button and quantity is set to 0
    // if (quantity === 0 && document.activeElement === document.body) {
    //   btnCart.current?.focus()
    // }

    // Focus plus button after pressing add to cart button
    if (quantity === 1 && document.activeElement === document.body) {
      btnPlus.current?.focus()
    }
  }, [quantity])

  const increment = () => {
    const value = quantity + 1
    setQuantity(value)
    if (callback) callback(value)
  }
  const decrement = () => {
    const value = quantity - 1
    setQuantity(value)
    if (callback) callback(value)
  }

  return quantity === 0 ? (
    <Button ref={btnCart} icon="cart" label="Add to Cart" onClick={increment} />
  ) : (
    <div className="btn btn-primary btn-quantity">
      <Button
        type="icon"
        icon="subtract"
        label="Subtract one item"
        onClick={decrement}
        ref={btnMinus}
      />
      {quantity}
      <Button
        type="icon"
        icon="add"
        label="Add one item"
        onClick={increment}
        ref={btnPlus}
      />
    </div>
  )
}
