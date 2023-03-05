import React from "react";
import { ICart } from "../../../../interfaces/Cart";

export const Cart = (props: ICart) => {
	return (
		<div className={props.styles?.sideCartContainer} style={props.sx}>
			<div className={props.styles?.cartIndividualCont}>{props.children}</div>
		</div>
	);
};

Cart.defaultProps = {
	sx: {},
};
