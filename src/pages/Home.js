import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { fetchProducts } from "../components/Products/productsSlice";
import Products from "../components/Products/Products";
import { useParams } from "react-router-dom";

export default function Home(){
    const { searchId } = useSelector((state) => state.searchBar);
    const { products, isLoading, error } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts(searchId));
    },[dispatch, searchId]);

    if(isLoading){
        return <div>Loading...</div>
    }
    
    if(error){
        return <div>
            <p>Error while loading posts</p>
            <p>Error message: {error}</p>
        </div>
    }

    return (
        <div>
            {!isLoading && !error ? (
                <div>
                    <Products products={products} />
                </div>
            ) : null }
        </div>
    )
}