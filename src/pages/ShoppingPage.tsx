
import React from 'react'
import Components from '../components/molecules/atoms/Product'
import { ProductCard } from '../components/molecules/ProductCard'
import { IProductCard } from '../interfaces/ProductCard'

const Producto: IProductCard = {
    img: './coffee-mug.png',
    title: 'Test title',
}


export const ShoppingPage = () => {
  return (
    <ProductCard product={Producto}>
        <Components.ProductImg />
        <Components.ProductTitle/>
        <Components.ProductButtons/>
    </ProductCard>
  )
}
