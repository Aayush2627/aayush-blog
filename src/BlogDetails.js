import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id}=useParams();
    const {data:blog,error,isPending}=useFetch('https://json-api-rf9d.onrender.com/blogs/'+id);
    const history=useHistory();
    const buttonHandler=()=>{
        fetch("http://localhost:8000/blogs/"+blog.id,{
            method:"DELETE"
        }).then(()=>{
            history.push('/')
        })
    }
    return ( 
        <div className="blogDetails">
            {isPending&& <div>Loading...</div> }
            {error&& <div>{error}</div> }
            {blog&& <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>
                    {blog.body}
                </div>
                <button onClick={buttonHandler}>Delete This Blog</button>
            </article> }
        </div>
     );
}
 
export default BlogDetails;