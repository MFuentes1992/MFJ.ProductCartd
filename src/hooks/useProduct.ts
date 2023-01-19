import { useEffect, useRef, useState } from "react";
import { IUseProduct } from "../interfaces/useProduct";

export const useProduct = ({ onChange, Product, value = 0 }: IUseProduct) => {
	const [counter, setCounter] = useState<number>(value);

	const isControlled = useRef(!!onChange);

	useEffect(() => {
		setCounter(value);
	}, [value]);

	const incrementBy = (n: number) => {
		if (isControlled.current) {
			return onChange!(n, Product);
		}

		const val = Math.max(counter + n, 0);
		setCounter(val);
		onChange && onChange(val, Product);
	};

	return { counter, incrementBy };
};
