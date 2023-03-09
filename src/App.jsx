import { createContext, useState } from 'react'
import {createBrowserRouter,RouterProvider ,BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Favourite from './Pages/Favourite'
import VerifyAccount from './Pages/VerifyAccount'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Search from './Pages/Search'
import Dashboard from './Pages/Dashboard'



const context = createContext()
function App() {
  const [toggle,setToggle] = useState(true)

  const Toggle=()=>{
    setToggle((prev)=>!prev)
  }
  return (
    <>
      {/* <RouterProvider router={router} />; */}
      <context.Provider value={{toggle,Toggle}}>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/favourites' element={<Favourite/>}/>
        <Route path='/verify' element={<VerifyAccount />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </Router>
      </context.Provider>

    </>
  )
}

export default App
export {context}
