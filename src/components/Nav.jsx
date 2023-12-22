import { NavLink } from 'react-router-dom'

const authenticatedOptions = (
    <>
        <NavLink className="link" to="/create-blog">Add Blog</NavLink>
        <NavLink className="link" to="/signout">Sign Out</NavLink>
    </>
)
const unauthenticatedOptions = (
    <>
        <NavLink className="link" to="/signup">Sign Up</NavLink>
        <NavLink className="link" to="/">Sign In</NavLink>
    </>
)
const alwaysOptions = (
    <>
        <NavLink className="link" to="/blogs">Blogs</NavLink>
    </>
)

const Nav = ({ user }) => {
        return (
            <nav>
                <div className="nav">
                    <NavLink className="logo" to="/">BlogsApp</NavLink>
                    <div className="links">
                        {user && <div className="link welcome">Welcome, {user?.user.username}</div>}
                        {alwaysOptions}
                        {user ? authenticatedOptions : unauthenticatedOptions}
                    </div>
                </div>
            </nav>
        )
}
export default Nav