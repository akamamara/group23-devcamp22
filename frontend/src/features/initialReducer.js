import { createSlice } from "@reduxjs/toolkit";

// Untuk validasi jika redux sudah bisa dipakai accross component
const initialSlice = createSlice({
    name:'setup',
    initialState:"DEVCAMP 2022 TEAM 23",
    reducers:{
        test: (state) => {
            alert("Redux berhasil di inisiasi: ", state)
        }
    }
})

export const {test} = initialSlice.actions;
export default initialSlice.reducer