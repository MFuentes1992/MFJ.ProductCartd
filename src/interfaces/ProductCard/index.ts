export interface IProductCard {
    img?: string;
    title: string;
    counter?: number;
    onAdd?: () => void;
    onSubtract?: () => void;
    styles?: any
}

export interface IProductCardProps {
    product: IProductCard,
    children: React.ReactElement | React.ReactElement[],
  }