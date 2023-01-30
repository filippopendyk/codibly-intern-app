import { createSlice } from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
    name: "searchBar",
    initialState: {
        searchId: ""
    },
    reducers: {
        setSearchId: (state, action) => {
            state.searchId = action.payload;
        },
        clearSearchId: (state) => {
            state.searchId = "";
        }
    }
});

export const { setSearchId, clearSearchId } = searchBarSlice.actions;

export default searchBarSlice.reducer;