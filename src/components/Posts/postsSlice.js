import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async(searchId, thunkAPI) => {
    
        let url;

        if(searchId){
            url = `https://reqres.in/api/products/${searchId}`;
        } else{
            url = 'https://reqres.in/api/products?per_page=12';
        } 

        const res = await fetch(url).then(
            (data) => data.json()
        )
        .then(dataJson => {
            if(searchId){
                let itemInArray = [];
                itemInArray.push(dataJson.data);
                return itemInArray
            } else {
                return dataJson.data;
            }
        });

        return res;
})

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        posts: [],
        error: ''
    },
    // extraReducers: {
    //     [fetchPosts.pending]: (state) => {
    //         state.isLoading = true;
    //         state.posts = {};
    //         state.error = '';
    //     },
    //     [fetchPosts.fulfilled]: (state, action) => {
    //         state.isLoading = false;
    //         state.posts = action.payload;
    //         state.error = '';
    //     },
    //     [fetchPosts.rejected]: (state, action) => {
    //         state.isLoading = false;
    //         state.posts = {};
    //         state.error = action.error.message;
    //     }
    // }
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