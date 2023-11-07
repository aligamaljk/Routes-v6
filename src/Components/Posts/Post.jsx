import { Link } from "react-router-dom"

const Post = ({id,author,image,title,body,handleDelete}) => {
  return (
    <>
        <div className="post">
          <Link to={`post/${id}`}>
            <img src={image} alt={author} />
            <div className="post-author">By:{author}</div>
            <h3>{title}</h3>
            <p className="post-body">{body.slice(0,100)}...</p>
          </Link>
            <button className="btn" onClick={()=>handleDelete(id)}>Delete</button>
        </div>
    </>
  )
}

export default Post