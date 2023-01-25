import React, { useState } from "react";
import Cart from "../components/molecules/atoms/Cart";
import Components from "../components/molecules/atoms/Product";
import { ProductCard } from "../components/molecules/ProductCard";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { IProductCard, IProductInCart } from "../interfaces/ProductCard";
import styles from "../styles/styles.module.css";
import "../styles/theme.css";

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

// -- This will be removed.
console.log(Producto2);

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
						<span>{count}</span>
					</>
				)}
			</ProductCard>
		</>
	);
};
