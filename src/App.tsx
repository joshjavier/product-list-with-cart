import { CartProvider } from 'react-use-cart'
import { LazyMotion } from 'framer-motion'
import ProductItem from './components/ProductItem'
import Cart from './components/Cart'
import './App.css'

import products from './data/products'

const loadFeatures = () => import('./animation/features').then(res => res.default)

function App() {
  return (
    <CartProvider id="fem">
      <LazyMotion strict features={loadFeatures}>
        <main className="with-sidebar wrapper">
          <h1 className="visually-hidden">Product List with Cart</h1>
          <div>
            <h2>Desserts</h2>
            <ul role="list" className="product-grid">
              {products.map(p => <li key={p.id}><ProductItem product={p} /></li>)}
            </ul>
          </div>
          <div className="sidebar">
            <Cart key="fem" />
          </div>
        </main>
      </LazyMotion>
    </CartProvider>
  )
}

export default App
