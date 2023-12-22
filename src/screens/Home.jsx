import {useState} from 'react'
import { signIn } from '../services/users'
import { useNavigate } from 'react-router-dom'

function Home({setUser}) {
    const [form, setForm] = useState({
        username: "",
        password: ""
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

        const userData = await signIn(form)
        setUser(userData)
        navigate("/blogs")
    }

  return (
    <div>
        <h1>Welcome to Blogs</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={form.username}
                placeholder='enter username'
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={form.password}
                placeholder='enter password'
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Home