import { useContext } from "react";
import { productContext } from "../../ProductCard";

type Props = {
  className?: string;
}

// -- Product Title
export const ProductTitle = ({className}: Props) =>  {
    const {title, styles} = useContext(productContext);
    return (<span className={styles?.productDescription + ' ' + className}>{title}</span>)
  }

  ProductTitle.defaultProps = {
    clasName: '',
  }
