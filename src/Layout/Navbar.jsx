import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (<>
        <div className="Navabr">
            <div className="app_navbar py-8 flex justify-between items-center">
  <div className="app_navbar-logo w-full sm:w-5/12 lg:w-6/12 text-[15px] md:text-[1.88rem]">
    <Link className="app_logo" to="/">
      <img src={logo} alt="Logo" className="w-2/3 md:w-1/3" /></Link>
  </div>
  <div className="app_navbar-items flex justify-between items-center w-5/12 sm:w-5/12 lg:w-1/5 xl:w-1/5 space-x-2 md:space-x-0">
    <div className="app_navbar-items_language cursor-pointer relative font-[200] w-2/5">
      <div className="app_navbar-items_language-icon flex justify-between">
        <span className="text-[15px] md:text-[30px]">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="svg-inline--fa fa-caret-down " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
          </svg>
        </span>
        <span  id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="ml-2 text-[15px] md:text-[20px] space-x-1 flex items-center">
        <svg width={12} height={12} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.7496 0.750013L1.24957 0.750012C1.11289 0.75044 0.978913 0.788137 0.862063 0.859046C0.745214 0.929953 0.649915 1.03139 0.586424 1.15243C0.522933 1.27347 0.493656 1.40953 0.501743 1.54597C0.50983 1.68242 0.554975 1.81407 0.63232 1.92676L7.38232 11.6768C7.66207 12.081 8.33557 12.081 8.61607 11.6768L15.3661 1.92676C15.4442 1.81431 15.49 1.68259 15.4985 1.54592C15.5071 1.40925 15.478 1.27285 15.4144 1.15156C15.3509 1.03026 15.2553 0.928698 15.1381 0.857904C15.0209 0.787112 14.8865 0.749797 14.7496 0.750013Z" fill="black" />
</svg>
<span>EN</span></span>
        
{/* <!-- Dropdown menu --> */}
<div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-20 dark:bg-gray-700">
  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
    <li>
      <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">EN</Link>
    </li>
    <li>
      <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">FR</Link>
    </li>
    
  </ul>
</div>

      </div>
    </div>
    <div className="app_navbar-items_login flex justify-center">
      <Link className="border-[1px] rounded-[75px] py-1 px-[15px] md:px-[25px] text-[12px] md:text-[18px]" to="/login">login</Link>
    </div>
    <div className="flex justify-center">
  {/* Dropdown */}
  <div className="relative">
    <div className="app_navbar-items_bars cursor-pointer text-right mx-1">
      <span className="" onClick={toggleDrawer}>
      <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' className=' w-8' viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
      </span>

    </div>
   
    {/* Dropdown Body */}
    <div className={`${!isOpen?'hidden':''} absolute right-0 w-40 mt-2 py-2 bg-white border rounded shadow-xl`}>   
      <Link to="/" className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-[#e6007a] hover:text-white !text-lg">Home</Link>
      <div className="py-2">
        <hr />
      </div>
      <Link to="/favourites" className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-[#e6007a] hover:text-white !text-lg">    
        Favourite
      </Link>
      <div className="py-2">
        <hr />
      </div>
      <Link to="#" className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-[#e6007a] hover:text-white !text-lg">    
        Blogs
      </Link>
      <div className="py-2">
        <hr />
      </div>
      <Link to="#" className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-[#e6007a] hover:text-white !text-lg">    
        Contact
      </Link>
      
    </div>
    {/* // Dropdown Body */}
  </div>
  {/* // Dropdown */}
</div>

  </div>
 
  {/* <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='app_sidebar fixed top-0 left-0 z-[90] h-screen pt-20 px-6 overflow-y-auto transition-transform -translate-x-full w-80 '
            >
  <div className="">


    <div className="app_sidebar-logo text-center text-2xl">
      <Link to="/">Polkadot Space</Link>
    </div>
    <ul className="sidebar_list mt-20 text-center">
      <li data-drawer-hide="drawer-example" className="sidebar_list-item">
        <Link className="p-2 flex justify-center cursor-pointer text-lg" to="/">Home</Link>
      </li>
      <li className="sidebar_list-item">
        <Link data-drawer-hide="drawer-example" className="p-2 flex justify-center cursor-pointer text-lg" to="/favourites">Favourites</Link>
      </li>
      <li data-drawer-hide="drawer-example" className="sidebar_list-item">
        <Link className="p-2 flex justify-center cursor-pointer text-lg" to="/blog">Blog</Link>
      </li>
      <li className="sidebar_list-item">
        <Link className="p-2 flex justify-center cursor-pointer text-lg" href="/pages/contact">Contact</Link>
      </li>
    </ul>
    <ul className="app_sidebar-auth mt-10 text-[20px] text-center">
      <li className="mb-6">
        <button className="btn block m-auto border-black text-black rounded">Requests</button>
      </li>
      <div>
        <li className="mb-4">
          <Link data-drawer-hide="drawer-example" className="btn block" to="/login">Login</Link>
        </li>
        <li>
          <Link data-drawer-hide="drawer-example" className="btn block" to="/register">Register</Link>
        </li>
      </div>
    </ul>
    <div className="absolute top-10 left-[120%] hidden">
      <div className="app_requests bg-white rounded-[30px] w-[800px] p-6 text-black">
        <div className="absolute right-8 top-8 w-[40px] cursor-pointer text-black text-center">X</div>
        <h2 className="text-[40px] font-[700] text-center">Make a request</h2>
        <form>
          <input type="text" className="w-full border-2 rounded-[46px] py-4 my-6 indent-6 font-[400] text-[12px] md:text-[20px]" placeholder="Website Name" name="name" defaultValue />
          <input type="url" className="w-full border-2 rounded-[46px] py-4 my-6 indent-6 font-[400] text-[12px] md:text-[20px]" placeholder="Website URL" name="url" defaultValue />
          <button className="main_btn px-[50px] text-[30px] block mx-auto">Submit</button>
        </form>
      </div>
    </div>
  </div>
  </Drawer> */}
  

</div>
</div>

            </>
            )}
                            
export default Navbar
