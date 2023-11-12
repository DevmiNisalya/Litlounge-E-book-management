import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Write from './pages/writer/Write';
import Settings from './pages/settings/Settings'
import Single from './pages/single/Single'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Category from './pages/category/Category';
import Kids from './pages/kids/Kids';
import Slideshow from './components/slideshow/Slideshow';
import Romance from './pages/romance/Romance';
import Short from './pages/short/Short';
import Horror from './pages/horror/Horror';
import Text from './pages/text/Text';






function App() {
  const user=false;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home/> : <Register />} />
        <Route path="/login" element={user ? <Home/> : <Login />} />
        <Route path="/write" element={user ? <Write/>: <Write />} />
        <Route path="/settings" element={user ?<Settings/>: <Register />} />
        <Route path="/post/:postId" element={<Single/>} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category/>} />
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/kids" element={<Kids/>} />  
        <Route path="/slideshow" element={<Slideshow/>} />  
        <Route path="/romance" element={<Romance/>} /> 
        <Route path="/short" element={<Short/>} />
        <Route path="/horror" element={<Horror/>} />
        <Route path="/text" element={<Text/>} />
        
       
       
         

      </Routes>
    </Router>
  );
}

export default App;
