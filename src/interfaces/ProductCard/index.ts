export interface IProductCard {
	id: number;
	img?: string;
	title: string;
	counter?: number;
	onAdd?: () => void;
	onSubtract?: () => void;
	styles?: any;
}

export interface IProductCardProps {
	product: IProductCard;
	children: React.ReactElement | React.ReactElement[];
	className: string;
	value?: number;
	onChange?: (_c: number, _p: IProductCard) => void;
}

export interface IProductCounter extends IProductCard {
	count: number;
}

export interface IProductInCart {
	[key: string]: IProductCounter;
}
