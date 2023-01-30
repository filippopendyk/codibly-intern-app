import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { fetchPosts } from "../components/Posts/postsSlice";
import Posts from "../components/Posts/Posts";
import { selectErrors } from "../features/errorsSlice";

export default function Home(){
    const { searchId } = useSelector((state) => state.searchBar);
    const { posts, isLoading } = useSelector((state) => state.posts);
    const error = useSelector((state) => state.errors);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(searchId));
    },[dispatch, searchId]);

    if(isLoading){
        return <div>Loading...</div>
    }

    return (
        <div>
            {!isLoading && posts.length ? (
                <Posts posts={posts} />
            ) : null }
        </div>
    )
}