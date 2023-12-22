import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import { verifyUser } from "./services/users.js";
import BlogCreate from './screens/BlogCreate.jsx';
import BlogDetail from './screens/BlogDetail.jsx';
import Blogs from './screens/Blogs.jsx';
import Home from './screens/Home.jsx';
import Signup from './screens/Signup.jsx';
import Nav from './components/Nav.jsx';
import SignOut from "./screens/SignOut.jsx"
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await verifyUser();
      setUser(userData);
    };

    fetchUser();
  }, []);

  return (
    <div className="App">
      <Nav user={user} setUser={setUser}/>
     <Routes>
      <Route path="" element={<Home setUser={setUser}/>} />
      <Route path="/blogs" element={<Blogs toggle={toggle}/>} />
      <Route path="/blogs/:id" element={<BlogDetail setToggle={setToggle}/>} />
      <Route path="/create-blog" element={<BlogCreate user={user} setToggle={setToggle}/>} />
      <Route path="/signup" element={<Signup setUser={setUser}/>} />
      <Route path="/signout" element={<SignOut setUser={setUser} />} />
     </Routes>
    </div>
  );
}

export default App;
