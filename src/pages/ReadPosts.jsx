import { useState, useEffect } from "react";
import { supabase } from "../client";
import Card from "../components/Card";

const ReadPosts = (props) => {
    const [posts, setPosts] = useState([]);

    // READ all post from table
    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await supabase.from("Posts").select();

            // Set state of posts
            setPosts(data);
        };
        fetchPosts();
    }, [props]);

    return (
        <div className="ReadPosts">
            {posts && posts.length > 0 ? (
                [...posts]
                    .sort((a, b) => a.id - b.id)
                    .map((post, index) => (
                        <Card
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            author={post.author}
                            description={post.description}
                        />
                    ))
            ) : (
                <h2>{"No Challenges Yet 😞"}</h2>
            )}
        </div>
    );
};

export default ReadPosts;
