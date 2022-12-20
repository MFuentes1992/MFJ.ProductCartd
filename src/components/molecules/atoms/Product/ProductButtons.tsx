import { useContext } from "react";
import { productContext } from "../../ProductCard";

type Props = {
  className?: string;
}

export const ProductButtons = ({className}: Props) => {
    const {onAdd, onSubtract, counter, styles} = useContext(productContext);
    return (
      <div className={styles?.buttonsContainer + ' ' + className}>
      {onSubtract && <button className={styles?.buttonMinus} onClick={() => onSubtract()} >-</button>}
      <div className={styles?.countLabel}>{counter}</div>
      {onAdd && <button className={styles?.buttonAdd} onClick={() => onAdd()}>+</button>}
    </div>
    )
  }
  
  ProductButtons.defaultProps = {
    onAdd: undefined,
    onSubtract: undefined,
    className: ''
  }