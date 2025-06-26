import react from 'react'
import './App.css'
import './index.css';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Product from './pages/Product'
import PlaceOrders from './pages/PlaceOrders'
import Orders from './pages/Orders'
import Login from './pages/Login';
import NavBar from './components/NavBar'
import Footer from './components/Footer';

function App() {

  return (
    <div className='px-4 sm:px-[4vw] md:px-[7vw] lg:px[9vw]'>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Collections' element={<Collections/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Product/:ProductId' element={<Product/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Place-order' element={<PlaceOrders/>}/>
          <Route path='/Orders' element={<Orders/>}/>
      </Routes>   
      <Footer/>
    </div>

  )
}

export default App
