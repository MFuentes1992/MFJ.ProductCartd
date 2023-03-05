# MFJ Product Card

Este es un paquete de pruebas de despliegue en NPM

### Marco Antonio Fuentes Jieménez.

```
import React, { useState } from "react";

import { IProductCard, IProductInCart } from "../interfaces/ProductCard";
```

```
const Producto1: IProductCard = {
	id: 1,
	img: "./coffee-mug.png",
	title: "Test title",
	counter: 0,
	maxCount: 0,
};

const Producto2: IProductCard = {
	id: 2,
	img: "./coffee-mug2.png",
	title: "Coffee mug - meme",
	counter: 0,
	maxCount: 0,
};

export const ShoppingPage = () => {
	return (
		<>
			<ProductCard
				initialValues={{ count: 4, maxCount: 10 }}
				key={Producto1.id}
				product={Producto1}
				className='bg-gray'
				value={0}
				styles={styles}>
				{({ count, maxCount, isMaxCountReached, reset, incrementBy }) => (
					<>
						<Components.ProductImg className='custom-image' />
						<Components.ProductTitle className='txt-white' />
						<Components.ProductButtons className='brd-white' />
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
		</>
	);
};
```
