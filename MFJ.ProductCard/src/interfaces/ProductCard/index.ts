export interface IProductCard {
	id: number;
	img?: string;
	title: string;
	counter: number;
	maxCount: number;
	onAdd?: () => void;
	onSubtract?: () => void;
	styles?: any;
}

export interface IRenderChild {
	count: number;
	maxCount: number;
	isMaxCountReached: boolean;
	incrementBy: (n: number) => void;
	reset: () => void;
}

export interface IProductCardProps {
	product: IProductCard;
	children: (args: IRenderChild) => JSX.Element;
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

export interface IInitialValues {
	count?: number;
	maxCount?: number;
}
