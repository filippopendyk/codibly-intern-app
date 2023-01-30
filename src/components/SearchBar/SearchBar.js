import { TextField, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSearchId } from "./searchBarSlice";
import { clearSearchId } from "./searchBarSlice";

export default function SearchBar(){
    const { searchId } = useSelector((state) => state.searchBar);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const regex = /^[1-9\b]+$/;
        if (event.target.value === "" || regex.test(event.target.value)) {
            dispatch(setSearchId(event.target.value));
        } else {
            dispatch(clearSearchId);
        }
    }

    return (
        <div>
            <Box component="form">
            <TextField 
                id="outlined-basic"
                label="outlined"
                variant="outlined"
                value={searchId}
                onChange={handleChange}
                />
       </Box>
        </div>
    )
}
