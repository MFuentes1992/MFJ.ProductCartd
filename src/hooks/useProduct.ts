import { useState } from "react"
import { IProductCard } from "../interfaces/ProductCard";


export const useProduct = ({onChange, Product}: {onChange: ((_c: number, product: IProductCard) => void) | undefined; Product: IProductCard}) => {
 const [ counter, setCounter] = useState<number>(0);

 const incrementBy = (n: number) => {
   const val = Math.max(counter + n, 0);
   setCounter(val);
   onChange && onChange(counter, Product);
 }

 return { counter, incrementBy };

}