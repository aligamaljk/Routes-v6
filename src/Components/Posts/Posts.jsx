import { useEffect, useState } from "react"
import Post from "./Post"
import axios from "axios"
// console.log(posts);
const Posts = () => {
  const [data , setData] = useState([])
  const [isloading, setIsloading] = useState(false)
// console.log(data);
const handleDelete = (id)=>{
  const newData = data.filter((posts)=>posts.id !== id)
  setData(newData)
}
const api = " http://localhost:4000/posts"
const fetchData = async ()=>{
  setIsloading(true)
  const res = await axios(api);
  const getData = res.data;
  setIsloading(false)
  return setData(getData)
}
useEffect(()=>{
  fetchData()
},[])
if(isloading){
  return (
    <>
      <div className="load">
        <div className="loading"></div>
      </div>
    </>
  )
}
if(!isloading && data.length == 0 ){
  return (
    <>
    <main>
        <h1 className="not-found">No Posts</h1>
        <button className="btn"
                onClick={fetchData}
                >Reload</button>
    </main>
    </>
  )
}
// console.log(data);
  return (
    <>
        <section className="posts">
          {data?.map((post)=>{
            return (
              <Post key={post.id} {...post} handleDelete={handleDelete} />
            )
          })
          }
        </section>
    </>
  )
}

export default Posts