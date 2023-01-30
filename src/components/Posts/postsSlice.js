import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async(searchId, {rejectWithValue}) => {

        let url;
        
        if(searchId){
                url = `https://reqres.in/api/products/${searchId}`;
            } else{
                url = 'https://reqres.in/api/products?per_page=12';
            } 

       try {
            const response = await fetch(url)
            .then((data) => data.json())
            .then(dataJson => {
                if(searchId){
                    let itemInArray = [];
                    itemInArray.push(dataJson.data);
                    return itemInArray;
                } else{
                    return dataJson.data;
                }
            })
            if(!response.ok){
                throw new Error();
            }
            return response;
        } catch (err) {
            return rejectWithValue("Error while loading the posts. Try again.");
        }
    });

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        posts: [],
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true;
                state.posts = [];
                state.error = '';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
                state.error = '';
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.posts = [];
                state.error = action.error.message;
            })
    }

});

export default postsSlice.reducer;