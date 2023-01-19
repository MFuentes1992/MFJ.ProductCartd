import { IProductCard } from "../ProductCard";

export interface IUseProduct {
	Product: IProductCard;
	value?: number;
	onChange: ((_c: number, product: IProductCard) => void) | undefined;
}
