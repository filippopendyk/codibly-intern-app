import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../components/Posts/postsSlice";

const errorsSlice = createSlice({
    name: "errors",
    initialState: "",
    extraReducers: {
        [fetchPosts.pending]: () => "",
        [fetchPosts.rejected]: (state, action) => {
            return action.error.message;
        }
     }

})

export default errorsSlice.reducer;