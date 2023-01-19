import React, { Children, useContext } from "react";
import { useProduct } from "../../hooks/useProduct";
import { IProductCard, IProductCardProps } from "../../interfaces/ProductCard";

export const productContext = React.createContext({} as IProductCard);
const { Provider } = productContext;

interface IProductCardCustom extends IProductCardProps {
	styles?: any;
	sx?: { [key: string]: string };
}

export const ProductCard = ({
	product,
	children,
	className,
	styles,
	sx,
	onChange,
}: IProductCardCustom) => {
	const { counter, incrementBy } = useProduct({ onChange, Product: product });

	return (
		<Provider
			value={{
				id: product.id,
				title: product.title,
				img: product?.img || undefined,
				counter,
				onAdd: () => incrementBy(1),
				onSubtract: () => incrementBy(-1),
				styles,
			}}>
			<div className={styles.productCard + " " + className} style={sx}>
				{children}
			</div>
		</Provider>
	);
};

ProductCard.defaultProps = {
	styles: {},
	sx: {},
};
