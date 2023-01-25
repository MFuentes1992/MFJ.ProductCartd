import React, { Children, useContext } from "react";
import { useProduct } from "../../hooks/useProduct";
import {
	IInitialValues,
	IProductCard,
	IProductCardProps,
} from "../../interfaces/ProductCard";

export const productContext = React.createContext({} as IProductCard);
const { Provider } = productContext;

interface IProductCardCustom extends IProductCardProps {
	styles?: any;
	sx?: { [key: string]: string };
	initialValues: IInitialValues;
}

export const ProductCard = ({
	initialValues,
	product,
	value,
	children,
	className,
	styles,
	sx,
	onChange,
}: IProductCardCustom) => {
	const { counter, maxCount, isMaxCountReached, incrementBy, reset } =
		useProduct({
			onChange,
			Product: product,
			value,
			initialValues,
		});

	return (
		<Provider
			value={{
				id: product.id,
				title: product.title,
				img: product?.img || undefined,
				counter,
				maxCount,
				onAdd: () => incrementBy(1),
				onSubtract: () => incrementBy(-1),
				styles,
			}}>
			<div className={styles.productCard + " " + className} style={sx}>
				{children({
					count: counter,
					maxCount,
					isMaxCountReached,
					reset,
					incrementBy,
				})}
			</div>
		</Provider>
	);
};

ProductCard.defaultProps = {
	styles: {},
	sx: {},
	value: 0,
	count: 0,
	maxCount: 0,
};
