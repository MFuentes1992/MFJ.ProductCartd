import { useContext } from "react";
import { productContext } from "../../ProductCard";

export const ProductButtons = () => {
    const {onAdd, onSubtract, counter, styles} = useContext(productContext);
    return (
      <div className={styles?.buttonsContainer}>
      {onSubtract && <button className={styles?.buttonMinus} onClick={() => onSubtract()} >-</button>}
      <div className={styles?.countLabel}>{counter}</div>
      {onAdd && <button className={styles?.buttonAdd} onClick={() => onAdd()}>+</button>}
    </div>
    )
  }
  
  ProductButtons.defaultProps = {
    onAdd: undefined,
    onSubtract: undefined,
  }