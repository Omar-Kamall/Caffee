import { createBrowserRouter , createRoutesFromElements , Route , Outlet , RouterProvider } from 'react-router-dom'
import { useState , useEffect } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'
import Navbar from './Component/Navbar'
import Home from './Page/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Gallery from './Component/Gallery'
import Footer from './Component/Footer'
import Support from './Component/Support'
import Pricing from './Component/Pricing'
import './App.css'

const Layout = () => {
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/support' element={<Support />}/>
        <Route path='/pricing' element={<Pricing />}/>
      </Route>
    </Route>
  ))
  const [loading , setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },3000)
  },[])
  return (
    <>
      {loading ? <div className='bg-black h-[100vh] flex justify-center items-center'>
        <BeatLoader size={50} color='#56181e'/>
      </div> : <RouterProvider router={router}/>}
    </>
  )
}

export default App