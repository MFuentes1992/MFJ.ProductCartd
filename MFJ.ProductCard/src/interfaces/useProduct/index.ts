import { IInitialValues, IProductCard } from "../ProductCard";

export interface IUseProduct {
	Product: IProductCard;
	value?: number;
	initialValues: IInitialValues;
	onChange: ((_c: number, product: IProductCard) => void) | undefined;
}
