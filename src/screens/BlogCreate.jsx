import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createBlog } from '../services/blogs'

function BlogCreate({user, setToggle}) {

    const [form, setForm] = useState({
        title: "",
        content: "",
        user: user?.user.id
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target

        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const blogData = await createBlog(form)
        setToggle(prev => !prev)
        navigate("/blogs")
    }

  return (
    <div>
        <h1>Create your Blog!</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={form.title}
                placeholder='enter title'
                onChange={handleChange}
            />
            <input
                type="text"
                name="content"
                value={form.content}
                placeholder='enter content'
                onChange={handleChange}
            />
            <button type="submit">Add Blog</button>
        </form>
    </div>
  )
}

export default BlogCreate