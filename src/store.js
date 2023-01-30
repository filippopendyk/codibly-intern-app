import { configureStore } from "@reduxjs/toolkit";
import searchBarSlice from "./components/SearchBar/searchBarSlice";
import postsSlice from "./components/Posts/postsSlice";

export default configureStore({
    reducer: {
        searchBar: searchBarSlice,
        posts: postsSlice
    }
})