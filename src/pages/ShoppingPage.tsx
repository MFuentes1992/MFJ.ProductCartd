import React, { useState } from "react";
import Cart from "../components/molecules/atoms/Cart";
import Components from "../components/molecules/atoms/Product";
import { ProductCard } from "../components/molecules/ProductCard";
import { IProductCard, IProductInCart } from "../interfaces/ProductCard";
import styles from "../styles/styles.module.css";
import "../styles/theme.css";

const Producto1: IProductCard = {
	id: 1,
	img: "./coffee-mug.png",
	title: "Test title",
};

const Producto2: IProductCard = {
	id: 2,
	img: "./coffee-mug2.png",
	title: "Coffee mug - meme",
};

export const ShoppingPage = () => {
	const [productShowcase] = useState<IProductCard[]>([Producto1, Producto2]);

	const [productsCart, setProductsCart] = useState<IProductInCart>({});
	const handleCounterChange = (counter: number, Product: IProductCard) => {
		if (counter === 0) {
			setProductsCart((prev) => {
				const tmp: IProductInCart = {};
				Object.keys(prev).forEach((key) => {
					if (key !== `${Product.id}`) tmp[key] = prev[key];
				});
				return tmp;
			});
		} else {
			setProductsCart((prev) => ({
				...prev,
				[`${Product.id}`]: { ...Product, count: counter },
			}));
		}
	};

	return (
		<>
			{productShowcase.map((p) => (
				<ProductCard
					key={p.id}
					product={p}
					className='bg-gray'
					styles={styles}
					onChange={(counter: number, Product: IProductCard) =>
						handleCounterChange(counter, Product)
					}>
					<Components.ProductImg className='custom-image' />
					<Components.ProductTitle className='txt-white' />
					<Components.ProductButtons className='brd-white' />
				</ProductCard>
			))}
			<Cart styles={styles} sx={{ width: "200px" }}>
				{Object.keys(productsCart).map((key) => (
					<ProductCard
						product={productsCart[key]}
						className='bg-gray'
						styles={styles}
						sx={{ width: "150px" }}
						onChange={(counter: number, Product: IProductCard) =>
							handleCounterChange(counter, Product)
						}>
						<Components.ProductImg className='custom-image' />
						<Components.ProductButtons className='brd-white' />
					</ProductCard>
				))}
			</Cart>

			<div>
				<code>{JSON.stringify(productsCart)}</code>
			</div>
		</>
	);
};
