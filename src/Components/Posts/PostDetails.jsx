import { useEffect, useState } from "react";
import { useParams } from "react-router"

const PostDetails = () => {
  const id = useParams()
  const [post,setPost] = useState({})
  const api = `http://localhost:4000/posts/${id.id}`
  const setData = async () =>{
    const res = await fetch(api)
    const data = await res.json()
    return setPost(data) 
  }
  useEffect(()=>{
    setData()
  },[])
  // const handleDelete = ()=>{
  //   fetch(api,{
  //     method:"DELETE",
  //   })
  // }
  // console.log(id.id);
  // console.log(post);
  const {author,body,image,title} = post
  return (
    <>
        <article className=' post-details'>
            <div className="post-title">
                <h1>{title}</h1>
                <button className="btn btn-danger"
                >Delete</button>
            </div>
            <img className='post-img' src={image} alt={author} />
            <p className="post-body">
              {body}
            </p>
        </article>
    </>
  )
}

export default PostDetails