import { ActionTypes } from "../constants/action-types";

const intitialState = {
	products: [],
};
export const productReducer = (state = intitialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			return { ...state, products: payload };

		default:
			return state;
	}
};
