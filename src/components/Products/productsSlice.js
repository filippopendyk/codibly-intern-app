import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'posts/fetchProducts',
    async(searchId, thunkAPI) => {

        let url;
        
        if(searchId){
                url = `https://reqres.in/api/products/${searchId}`;
            } else{
                url = 'https://reqres.in/api/products?per_page=12';
            } 

        //     const response = await fetch(url)
        //     .then(handleErrors)
        //     .then((data) => data.json())
        //     .then(dataJson => {
        //         if(searchId){
        //             let itemInArray = [];
        //             itemInArray.push(dataJson.data);
        //             return itemInArray;
        //         } else{
        //             return dataJson.data;
        //         }
        //     })
        //     .catch(error => {
        //         thunkAPI.rejectWithValue("Failed to load posts");
        //     })
           
        //     return response;

        try {
            const response = await fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error(res);
                }
                return res;
            })
            .then((data) => data.json())
            .then(dataJson => {
                if(searchId){
                    let itemInArray = [];
                    itemInArray.push(dataJson.data);
                    return itemInArray;
                } else {
                    return dataJson.data;
                }                
            }) 
            return response;
        } catch(error) {
            return thunkAPI.rejectWithValue(error);
        }
    
    });

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        products: [],
        error: '',
        page: 0,
        nextPage: 0,
        prevPage: 0,
        limit: 0,
        total: 0
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
                state.products = [];
                state.error = '';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
                state.error = '';
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.products = [];
                state.error = action.error.message;
            })
    }

});

export default productsSlice.reducer;