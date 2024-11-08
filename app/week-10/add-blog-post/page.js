"use client"
import { useState } from "react";
import { dbAddBlogPost } from "../_services/blog-service";
import { useUserAuth } from "../_utils/auth-context";

export default function AddBlogPostPage(){
    const {user} = useUserAuth();
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const handleTitleChange = (event) => setTitle(event.target.value);
    const handleContentsChange = (event) => setContents(event.target.value);
    const handleSubmit = (event) => {
        event.preventDefault();
        let newBlogPost = {
            title: title,
            contents: contents,
            // author: "",
            // date: new Date()
        }
        dbAddBlogPost(user.uid, newBlogPost);
        setTitle("");
        setContents("");
    }
    return(
        <main>
            <header><h1>Add a new Blog Post</h1></header>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" onChange={handleTitleChange} value={title} />
                </div>
                <div>
                    <label>Contents:</label>
                    <textarea onChange={handleContentsChange} value={contents}></textarea>
                </div>
                <div>
                    <button type="submit">Submit Blog Post</button>
                </div>
            </form>
        </main>
    );
}