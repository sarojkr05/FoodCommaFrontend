import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    productsData: [], // Array of products
}

export const getAllProducts = createAsyncThunk('/products/getAll', async () => {
    try {
        const products = axiosInstance.get('/products');
        toast.promise(products, {
            loading: 'Loading all the products',
            error: 'Something went cannot load products',
            success: 'Products loaded successfully',
        });
        const apiResponse = await products;
        return apiResponse
    } catch(error) {
        console.log(error);
        toast.error('Something went wrong');
    }
});

export const getproductDetails = createAsyncThunk('/products/getDetails', async (id) => {
    try {
        const product = axiosInstance.get(`/products/${id}`);
        toast.promise(product, {
            loading: 'Loading the product',
            error: 'Something went cannot load product',
            success: 'Product loaded successfully',
        });
        const apiResponse = await product;
        return apiResponse;
    } catch(error) {
        console.log(error);
        toast.error('Something went wrong');
    }
});

export const addProducts = createAsyncThunk('/admin/addProduct', async (data) => {
    console.log("incoming addProduct data to the thunk", data);
    try {
        const response = axiosInstance.post('/products', data); 
        toast.promise(response, {
            success: (resolvedPromise) => {
                return resolvedPromise?.data?.message;
            },
            loading: 'Adding the product...',
            error: 'Ohh No!, Something went wrong, cannot add the product',
        });
        const apiResponse = await response;
        return apiResponse;
    } catch(error) {
        console.log(error);
    }
});

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            console.log(action.payload);
            state.productsData = action?.payload?.data?.data;
        })
        .addCase(addProducts.fulfilled, (state, action) => {
            console.log("addcase obj", action)
            const formData = new FormData();
            formData.append('productImage', action?.data?.data?.productImage)
            console.log("prodduct img url", )
        })
    }
});
export default productSlice.reducer;