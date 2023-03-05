import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { IUseProduct } from "../interfaces/useProduct";

export const useProduct = ({
	onChange,
	Product,
	value = 0,
	initialValues,
}: IUseProduct) => {
	const [counter, setCounter] = useState<number>(initialValues.count || value);
	const [maxCount] = useState<number>(initialValues?.maxCount || 0);
	const isMounted = useRef(false);

	useLayoutEffect(() => {
		if (!isMounted.current) return;
		setCounter(value);
	}, [value]);

	useEffect(() => {
		isMounted.current = true;
	}, []);

	const reset = () => {
		setCounter(initialValues?.count || value);
	};

	const incrementBy = (n: number) => {
		if (maxCount > 0 && counter >= maxCount && n > 0) return;
		const val = Math.max(counter + n, 0);
		setCounter(val);
		onChange && onChange(val, Product);
	};

	return {
		counter,
		maxCount,
		isMaxCountReached: !!initialValues?.maxCount && counter >= maxCount,
		incrementBy,
		reset,
	};
};
