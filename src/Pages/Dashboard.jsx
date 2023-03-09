import React from 'react'
import AdminNavbar from '../Layout/AdminNavbar'
import Drawer from '../Layout/Drawer'

const Dashboard = () => {
    return (<>
        <AdminNavbar/>
        <div className='flex'>
        <Drawer/>
        <div className="app_accountChange app_profile w-12/12 lg:w-10/12 xl:w-2/4 mt-6 py-[20px] mx-auto rounded-[30px] bg-white">
  <div className="text-center">
    <div className="text-[40px] font-[600] relative flex">
      <img src="https://api.polkadotspace.io/media/default-avatar.png" alt="Person" className="rounded-full w-[100px] border-[0.5px]" />
      <span className="edit_pen absolute top-16 left-16 cursor-pointer w-[35px] h-[35px] bg-white rounded-full text-[18px] leading-[36px]">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" className="svg-inline--fa fa-pen " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
        </svg>
        <input id="profile_image" type="file" name="image" className="hidden" /></span>
      <h2 className="flex flex-col text-[15px] md:text-[30px] text-left justify-center ml-[16px] font-[500]">
        <span>Hamdy shawky</span>
        <span className='text-sm font-thin'>new york , usa</span>
      </h2>
    </div>
    <form className="app_forms-form mt-4 text-[12px] md:text-[18px]">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 md:mr-[60px]">
          <label className="font-[300] mt-[20px] block text-[15px] text-left mb-[10px]">Name</label>
          <input type="text" name="first_name" className="w-full border-1 !border-gray-500 !text-black placeholder:text-black rounded-[10px] bg-gray-200 py-2 indent-6 font-[300]" placeholder="Name" /></div>
        <div className="w-full md:w-1/2">
          <label className="font-[300] mt-[20px] block text-[15px] text-left mb-[10px]">Full Name</label>
          <input type="text" name="last_name" className="w-full border-1 !border-gray-500 !text-black placeholder:text-black rounded-[10px] bg-gray-200 py-2 indent-6 font-[400]" placeholder="Full Name" /></div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 md:mr-[60px]">
          <label className="font-[300] mt-[20px] block text-[15px] text-left mb-[10px]">Email address</label>
          <input type="email" name="password" className="w-full border-1 !border-gray-500 !text-black placeholder:text-black rounded-[10px] bg-gray-200 py-2 indent-6 font-[400]" placeholder="" /></div>
        <div className="w-full md:w-1/2">
          <label className="font-[300] mt-[20px] block text-[15px] text-left mb-[10px]">Phone Number</label>
          <input type="phone" name="email" className="w-full border-1 !border-gray-500 !text-black placeholder:text-black rounded-[10px] bg-gray-200 py-2 indent-6 font-[400]" placeholder="" defaultValue="" /></div>
      </div>
     
      <button className="main_btn rounded-2xl mt-24 bg-pink-600 text-white text-[15px]" type="submit">Save Changes</button>
    </form>
  </div>
</div>
</div>
</>
)
}

export default Dashboard
