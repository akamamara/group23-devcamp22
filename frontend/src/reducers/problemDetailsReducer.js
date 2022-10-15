import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const problemDetailsSlice = createSlice({
	name: "problemDetails",
	initialState,
	reducers: {
		addDetailProblem(state, action) {
			const { payload } = action;
			return { ...payload };
		},
	},
});

export const { addDetailProblem } = problemDetailsSlice.actions;
export default problemDetailsSlice.reducer;
