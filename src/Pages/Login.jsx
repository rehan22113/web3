import React from 'react'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'
import { Link } from 'react-router-dom'

const Login = () => {
    return (<>
    <main className="app relative h-screen overflow-x-hidden">
        <span></span>
        <span></span>
        <span></span>
    <div className="container md:w-[80%] w-[95%] flex flex-col m-auto">
    <Navbar/>
    <div className='py-24'>
        <div className="app_forms w-12/12 lg:w-2/5 lg:mx-auto m-15 py-20 px-4 sm:px-10 md:px-20 rounded-[30px] bg-[#e6007a]">
  <div className="text-center bg-[#e6007a]">
    <h2 className="text-[20px] md:text-[30px] font-[600] text-white">Login to your Account</h2>
    <form className="app_forms-form md:mt-[40px] text-[12px] md:text-[18px]">
      <input type="email" name="email" required className="w-full border-2 border-white rounded-[46px] py-3 indent-6 font-[400] focus:bg-white bg-transparent focus:text-black placeholder:text-white" placeholder="Type your email" />
      <div className="relative mt-[15px]">
        <input type="password" name="password" required className="w-full border-2 border-white rounded-[46px] py-3 indent-6 font-[400] focus:bg-white bg-transparent focus:text-black placeholder:text-white" placeholder="Type your Password" />
        <span className="absolute top-3 right-4 cursor-pointer form_eye text-[20px] md:text-[25px]">
        <svg xmlns="http://www.w3.org/2000/svg" fill='white' className='w-6' viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" /></svg>

        </span>
      </div>
      <div className="form_btns flex justify-between items-center mt-[25px] md:mt-[35px]">
        <button type="submit" className="main_btn w-full mr-[5px] bg-white text-black">Login</button>
        <Link className="btn w-full ml-[5px] !text-white !border-white" to="/register">Register</Link>
      </div>
      <p className="forgot_email md:text-[20px] font-[400] mt-[25px]">
        <Link className="text-[10px] md:text-[20px] text-white" to="/reset">Forgot Your Password?</Link>
      </p>
    </form>
  </div>
</div>
<Footer/>
</div>
</div>
</main>

            </>
            )
            }
            
            export default Login
