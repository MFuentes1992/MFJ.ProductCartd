
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
    <ProductCard product={Producto} className="bg-gray">
        <Components.ProductImg className='custom-image'/>
        <Components.ProductTitle className='txt-white'/>
        <Components.ProductButtons className='brd-white'/>
    </ProductCard>
  )
}
