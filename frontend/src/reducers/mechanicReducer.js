import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const mechanicDetailsSlice = createSlice({
	name: "mechanicDetails",
	initialState,
	reducers: {
		changeMechanic(state, action) {
			const { payload } = action;
			return { ...payload };
		},
	},
});

export const { changeMechanic } = mechanicDetailsSlice.actions;
export default mechanicDetailsSlice.reducer;
