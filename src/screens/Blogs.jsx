import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { getBlogs } from '../services/blogs'

function Blogs({toggle}) {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetchBlogs()
    }, [toggle])

    async function fetchBlogs(){
        const blogsData = await getBlogs()
        setBlogs(blogsData)
    }

  return (
    <div>
        <h1>Blogs</h1>
        {
            blogs?.map((blog) => (
                <Link to={`/blogs/${blog.id}`}>
                    <div>
                        <h3>{blog.title}</h3>
                        <p>{blog.content}</p>
                    </div>
                </Link>
            ))
        }
    </div>
  )
}

export default Blogs