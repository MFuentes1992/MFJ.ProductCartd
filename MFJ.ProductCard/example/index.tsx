import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Components, ProductCard } from '../.';
import { IProductCard } from '../dist/interfaces/ProductCard';
import styles from '../../src/styles/styles.module.css';
import '../styles/theme.css';

const App = () => {
  const Producto1: IProductCard = {
    id: 1,
    img: './coffee-mug.png',
    title: 'Test title',
    counter: 0,
    maxCount: 0,
  };

  const Producto2: IProductCard = {
    id: 2,
    img: './coffee-mug2.png',
    title: 'Coffee mug - meme',
    counter: 0,
    maxCount: 0,
  };
  return (
    <div>
      <ProductCard
        initialValues={{ count: 4, maxCount: 10 }}
        key={Producto1.id}
        product={Producto1}
        className="bg-gray"
        value={0}
        styles={styles}
      >
        {({ count, maxCount, isMaxCountReached, reset, incrementBy }) => (
          <>
            <Components.ProductImg className="custom-image" />
            <Components.ProductTitle className="txt-white" />
            <Components.ProductButtons className="brd-white" />
            <button onClick={reset}>Reset</button>
            {!isMaxCountReached && (
              <button onClick={() => incrementBy(-2)}> - 2</button>
            )}
            {!isMaxCountReached && (
              <button onClick={() => incrementBy(2)}> + 2</button>
            )}
          </>
        )}
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
