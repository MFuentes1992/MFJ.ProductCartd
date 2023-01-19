import { useState } from "react";
import { IProductCard, IProductInCart } from "../interfaces/ProductCard";

export const useShoppingCart = () => {
	const [data, setData] = useState<IProductInCart>({});
	// -- Handlers
	const handler = (counter: number, Product: IProductCard) => {
		setData((oldCart) => {
			const pInCart: any = data[`${Product.id}`] || {
				...Product,
				count: 0,
			};
			if (Math.max(pInCart.count + counter, 0) > 0) {
				pInCart.count += counter;
				return {
					...oldCart,
					[`${Product.id}`]: pInCart,
				};
			}

			const tmp: IProductInCart = {};
			Object.keys(oldCart).forEach((key) => {
				if (key !== `${Product.id}`) tmp[key] = oldCart[key];
			});
			return tmp;
		});
	};

	return { productsCart: data, handler };
};
