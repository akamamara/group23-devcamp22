import { createSlice } from "@reduxjs/toolkit";

const initialState = {}
const problemDetailSlice = createSlice({
    name:'problemDetail',
    initialState,
    reducers:{
        addDetailProblem(state, action){
            const {payload} = action
            state = {...payload}
        }
    }
})

export const {addDetailProblem} = problemDetailSlice.actions;
export default problemDetailSlice.reducer