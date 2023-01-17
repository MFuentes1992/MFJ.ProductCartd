
import React, { useState } from 'react'
import Components from '../components/molecules/atoms/Product'
import { ProductCard } from '../components/molecules/ProductCard'
import { IProductCard, IProductInCart } from '../interfaces/ProductCard'
import styles from '../styles/styles.module.css';
import '../styles/theme.css';

const Producto1: IProductCard = {
    id: 1,
    img: './coffee-mug.png',
    title: 'Test title',
}

const Producto2: IProductCard = {
  id: 2,
  img: './coffee-mug2.png',
  title: 'Coffee mug - meme',
}

export const ShoppingPage = () => {

  const [productShowcase] = useState<IProductCard[]>([Producto1, Producto2]);

  // -- const [productsCart] = useState<IProductInCart>({})
  const handleCounterChange = (counter: number, Product: IProductCard) => {
    console.log(counter);
    console.log(Product);
    
    
  }

  return (
    <>
      {
        productShowcase.map((p) => (
          <ProductCard key={p.id} product={p} className="bg-gray" styles={styles} onChange={(counter: number, Product: IProductCard) => handleCounterChange(counter, Product)}>
            <Components.ProductImg className='custom-image'/>
            <Components.ProductTitle className='txt-white'/>
            <Components.ProductButtons className='brd-white'/>
          </ProductCard>  
        ))
      }
    </>

  )
}
