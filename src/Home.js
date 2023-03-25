
import BlogLists from "./BlogLists";
import useFetch from "./useFetch";
const Home = () => {
    const {data:blogs,isPending,error}=useFetch('https://json-api-rf9d.onrender.com/blogs')
    return ( 
        <div className="home">
            {error&& <div>{error}</div> }
            {isPending && <div> Loading...</div>}
            {blogs&&<BlogLists blogs={blogs} title ="All Blogs!"/>}
            
        </div>
        
     );
}
 
export default Home;