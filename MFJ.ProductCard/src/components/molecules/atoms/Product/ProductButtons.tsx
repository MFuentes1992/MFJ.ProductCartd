import React from 'react';
import { useCallback, useContext } from 'react';
import { productContext } from '../../ProductCard';

type Props = {
  className?: string;
  counter?: number;
};

export const ProductButtons = ({ className }: Props) => {
  const { onAdd, onSubtract, counter, styles, maxCount } = useContext(
    productContext
  );

  const isMaxCountReached = useCallback(() => {
    if (maxCount === 0) return false;
    return counter >= maxCount;
  }, [counter]);

  return (
    <div className={styles?.buttonsContainer + ' ' + className}>
      {onSubtract && (
        <button className={styles?.buttonMinus} onClick={() => onSubtract()}>
          -
        </button>
      )}
      <div className={styles?.countLabel}>{counter}</div>
      {onAdd && (
        <button
          className={`${styles?.buttonAdd} ${isMaxCountReached() &&
            styles?.disabled}`}
          disabled={isMaxCountReached()}
          onClick={() => onAdd()}
        >
          +
        </button>
      )}
    </div>
  );
};

ProductButtons.defaultProps = {
  onAdd: undefined,
  onSubtract: undefined,
  className: '',
};
