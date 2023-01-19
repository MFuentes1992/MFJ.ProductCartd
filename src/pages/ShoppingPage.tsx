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
};

const Producto2: IProductCard = {
	id: 2,
	img: "./coffee-mug2.png",
	title: "Coffee mug - meme",
};

export const ShoppingPage = () => {
	const [productShowcase] = useState<IProductCard[]>([Producto1, Producto2]);

	const { productsCart, handler: handleCounterChange } = useShoppingCart();

	return (
		<>
			{productShowcase.map((p) => (
				<ProductCard
					key={p.id}
					product={p}
					className='bg-gray'
					styles={styles}
					value={productsCart[`${p.id}`]?.count || 0}
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
						key={key}
						product={productsCart[key]}
						value={productsCart[key].count}
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
		</>
	);
};
