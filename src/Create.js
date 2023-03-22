import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const[title, setTitle]=useState('');
  const[body, setBody]=useState('');
  const[author, setAuthor]=useState("Aayush");
  const [isPending,setIsPending]=useState(false);
  const history=useHistory();
  const handleSubmit=(e)=>{
    e.preventDefault();
    setIsPending(true);
    const blog={title ,body ,author};
    fetch("http://localhost:8000/blogs",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(blog)
    }).then(()=>{
      console.log("Blog Added Successfully")
      setIsPending(false);
      history.push("/")
    })
  }
  
    return ( 
        <div className="create">            
       <h1>Add New Blog</h1> 
       <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input type="text" 
        required value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <label>Blog Body:</label>
        <textarea  required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
        <label>Blog Author:</label>
        <select required value={author} onChange={(e)=>setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="luigi">luigi</option>
          <option value="Aayush">Aayush</option>

        </select>
        {!isPending&&<button type="submit">Add Blog</button>}
        {isPending&&<button type="submit" disabled>Adding Blog...</button>}

       </form>
       
       </div>
      
     );
}
 
export default Create;