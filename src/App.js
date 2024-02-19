import './App.css';
import {  BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import TopBar from './components/TopBar/TopBar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Write from './pages/write/Write';
import Settings from './pages/Settings/Settings';
import Single from './pages/Single/Single';
import { useState } from 'react';
import Contact from './pages/contact/Contact';
import Posts from './components/Posts/Posts';

function App() {
  const [hello,setHello]=useState(true)
  const currentUser = true;
const deleting=(text)=>{
setHello(text)

}
 
  return (
<Router>
 
      <Routes>
        <Route path="/" element={<Home hello={hello}/>} />
        <Route path='/posts' element={<Home/>}></Route>
        <Route path="/register" element={<Register/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/login" element={currentUser?<Login/>:<Register/>} />
        <Route path="/post/:id" element={<Single/>} />
        <Route path="/blogs" element={<Posts/>} />
        <Route path='/write' element={currentUser ? <Write /> : <Login />}></Route>
        <Route path='/settings'element={currentUser ? <Settings deleting={deleting} /> : <Login/>}></Route>
      
      </Routes>
    </Router>
  );
}

export default App;
