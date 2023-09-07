import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from "./Utils/StatusCode";

const initialState = {
  data: [],
  status:StatusCode.IDLE,
};
const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
  },
  extraReducers:(builder)=>{

    builder
    .addCase(getProducts.pending,(state,action)=>{
        state.status = StatusCode.LOADING
    })
    .addCase(getProducts.fulfilled,(state,action)=>{
        state.data = action.payload;
        state.status = StatusCode.IDLE
    })
    .addCase(getProducts.rejected,(state,action)=>{
        state.status = StatusCode.ERROR
    })
  }
});

export const { fetchProducts } = ProductSlice.actions;
export default ProductSlice.reducer;


export const getProducts = createAsyncThunk('products/get',async()=>{
    const result = await fetch("https://fakestoreapi.com/products");
    const data = await result.json();
    return data;

})

