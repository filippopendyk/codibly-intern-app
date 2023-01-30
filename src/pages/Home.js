import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { fetchPosts } from "../components/Posts/postsSlice";
import Posts from "../components/Posts/Posts";

export default function Home(){
    const { searchId } = useSelector((state) => state.searchBar);
    const { posts, isLoading, error } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(searchId));
    },[dispatch, searchId]);

    return (
        <div>
            This is home comp
            {/* {isLoading && <div>Loading...</div>}
            {!isLoading && error ? <div>
                <h2>Currently app wasnt able to fetch the posts.</h2>
                <h3>Error message: <em>{error}</em></h3>
            </div> : null}
            {!isLoading && posts } */}
        </div>
    )
}