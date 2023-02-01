import { configureStore } from "@reduxjs/toolkit";
import searchBarSlice from "./components/SearchBar/searchBarSlice";
import productsSlice from "./components/Products/productsSlice";

export default configureStore({
    reducer: {
        searchBar: searchBarSlice,
        products: productsSlice,
    }
})