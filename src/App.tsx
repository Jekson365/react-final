import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Category from './category/Category'
import Contact from './contact/Contact'
import Shop from './shop/Shop'
import Blog from './blog/Blog'
import Navigation from './components/Navigation'
import Notification from './components/Notification'

function App() {

  return (
    <>
      <BrowserRouter>
        <Notification />
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/category' element={<Category />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
