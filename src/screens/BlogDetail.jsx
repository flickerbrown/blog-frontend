import {useState, useEffect} from 'react'
import { getBlog, deleteBlog } from '../services/blogs'
import {useParams, useNavigate} from 'react-router-dom'

function BlogDetail({setToggle}) {
    const [blog, setBlog] = useState({})

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        getOneBlog()
    }, [])

    async function getOneBlog(){
        const blogData = await getBlog(id)
        setBlog(blogData)
    }

    async function handleDelete(){
        await deleteBlog(id)
        setToggle(prev => !prev)
        navigate("/blogs")
    }

  return (
    <div>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default BlogDetail