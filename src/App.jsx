import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Success from './pages/Success';
import Error from './pages/Error';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';
// import Navbar from './components/Navbar';
const App = () => {
  return <BrowserRouter>

<Routes>
  <Route path='/' element={<Home />}></Route>


  <Route path='/success' element={<ProtectedRoute element={<Success />} />} />

  {/* <Route path='/navbar' element={<Navbar/>}></Route> */}
  <Route path='/*' element={<Error/>}></Route>



</Routes>
<Footer />
  </BrowserRouter>;
}

export default App