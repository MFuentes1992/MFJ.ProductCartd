import React, { Children, useContext } from 'react'
import { useProduct } from '../../hooks/useProduct';
import { IProductCard, IProductCardProps } from '../../interfaces/ProductCard';
import styles from '../../styles/styles.module.css';
import '../../styles/theme.css';



export const productContext = React.createContext({} as IProductCard)
const { Provider } = productContext;

export const ProductCard = ({product, children, className}: IProductCardProps) => {
  const {counter, incrementBy} = useProduct();

  return (
    <Provider value={{
      title: product.title,
      img: product?.img || undefined,
      counter,
      onAdd: () => incrementBy(1),
      onSubtract: () => incrementBy(-1),
      styles,

    }}>
      <div className={styles.productCard + ' ' + className}>
        {children}
      </div>
    </Provider>


  )
}
