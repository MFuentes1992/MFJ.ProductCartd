import { useContext } from "react";
import { productContext } from "../../ProductCard";

// -- Product Title
export const ProductTitle = () =>  {
    const {title, styles} = useContext(productContext);
    return (<span className={styles?.productDescription}>{title}</span>)
  }