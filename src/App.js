import './App.css';
import { useEffect } from 'react';
import Login from './pages/Login';
import Header1 from './Components/Header1';
import Header from './Components/Header';
import Signup from './pages/Signup';
import Footer from './Components/Footer';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Myprofile from './pages/Myprofile';
import About from './pages/About';
import SingleProject from './pages/SingleProject';
import Addproject from './pages/Addproject';
function App() {

  useEffect(()=>{
    document.title="UML generator"
     },[]);
  return (
    <div className="App">
      {/* <Header></Header> */}
      {/* <Header1></Header1> */}
      {/* <Login></Login> */}
      {/* <Home></Home> */}
      {/* <Signup ></Signup> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='about' element={<About/>}/>
        {/* 3ayzeen nzbot el routeen dool 3a4an da el profile bta3 user mo3yn fa --> htb2a 8aleban '/:userid/myprojects' */}
        <Route path='Projects' element={<Myprofile/>}/>
        <Route path='Projects/:projectid' element={<SingleProject/>}/>
        <Route path='addproject' element={<Addproject/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
