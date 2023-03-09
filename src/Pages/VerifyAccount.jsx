import React from 'react'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'

const VerifyAccount = () => {
    return (<>
    <main className="app relative h-screen overflow-x-hidden">
        <span></span>
        <span></span>
        <span></span>
    <div className="container md:w-[80%] w-[95%] flex flex-col m-auto">
     <Navbar/>
     <div className='md:py-10 py-10'>
        <div className="app_accountChange app_profile app_forms w-12/12 lg:w-10/12 xl:w-2/4 sm:mx-auto mt-6 py-[20px] px-10 md:pl-[30px] rounded-[30px] md:pr-[63px] bg-[#e6007a]">
  <div className="text-center">
    <div className="text-[40px] font-[600] relative flex justify-center text-center">
    <svg width={111} height={111} viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M55.5 27.75C52.0697 27.75 48.7165 28.7672 45.8643 30.673C43.0122 32.5787 40.7892 35.2874 39.4765 38.4566C38.1638 41.6257 37.8203 45.113 38.4895 48.4773C39.1587 51.8417 40.8106 54.9321 43.2361 57.3576C45.6617 59.7832 48.7521 61.435 52.1164 62.1042C55.4808 62.7735 58.968 62.43 62.1372 61.1173C65.3063 59.8046 68.0151 57.5816 69.9208 54.7294C71.8266 51.8773 72.8438 48.524 72.8438 45.0937C72.8438 40.4939 71.0165 36.0824 67.7639 32.8299C64.5113 29.5773 60.0999 27.75 55.5 27.75ZM55.5 55.5C53.4418 55.5 51.4299 54.8897 49.7186 53.7462C48.0073 52.6028 46.6735 50.9775 45.8859 49.076C45.0983 47.1746 44.8922 45.0822 45.2937 43.0636C45.6952 41.045 46.6863 39.1908 48.1417 37.7354C49.597 36.2801 51.4512 35.289 53.4699 34.8875C55.4885 34.4859 57.5808 34.692 59.4823 35.4796C61.3838 36.2673 63.009 37.601 64.1525 39.3123C65.2959 41.0236 65.9063 43.0356 65.9063 45.0937C65.9035 47.8528 64.8062 50.4981 62.8553 52.449C60.9043 54.4 58.2591 55.4972 55.5 55.5Z" fill="white" />
  <path d="M55.5 6.9375C45.8953 6.9375 36.5062 9.78564 28.5201 15.1218C20.5341 20.4579 14.3097 28.0423 10.6341 36.9159C6.95854 45.7896 5.99684 55.5539 7.87064 64.9741C9.74443 74.3943 14.3696 83.0473 21.1611 89.8389C27.9527 96.6305 36.6057 101.256 46.0259 103.129C55.4461 105.003 65.2104 104.041 74.0841 100.366C82.9577 96.6903 90.5421 90.4659 95.8783 82.4799C101.214 74.4938 104.063 65.1048 104.063 55.5C104.048 42.6249 98.9267 30.2814 89.8227 21.1774C80.7186 12.0733 68.3751 6.95219 55.5 6.9375ZM34.6875 91.4952V86.7187C34.6903 83.9597 35.7875 81.3144 37.7385 79.3635C39.6894 77.4125 42.3347 76.3152 45.0938 76.3125H65.9063C68.6653 76.3152 71.3106 77.4125 73.2616 79.3635C75.2125 81.3144 76.3098 83.9597 76.3125 86.7187V91.4952C69.9965 95.1832 62.8139 97.1267 55.5 97.1267C48.1861 97.1267 41.0035 95.1832 34.6875 91.4952ZM83.2223 86.4621C83.1531 81.9122 81.2994 77.5716 78.0605 74.3755C74.8215 71.1794 70.4566 69.3836 65.9063 69.375H45.0938C40.5434 69.3836 36.1785 71.1794 32.9396 74.3755C29.7006 77.5716 27.8469 81.9122 27.7778 86.4621C21.4874 80.8453 17.0515 73.4503 15.0573 65.2564C13.0631 57.0625 13.6048 48.4562 16.6106 40.5769C19.6164 32.6977 24.9446 25.9173 31.8895 21.1336C38.8345 16.3498 47.0687 13.7884 55.5018 13.7884C63.9348 13.7884 72.169 16.3498 79.114 21.1336C86.0589 25.9173 91.3871 32.6977 94.3929 40.5769C97.3987 48.4562 97.9404 57.0625 95.9462 65.2564C93.952 73.4503 89.5161 80.8453 83.2257 86.4621H83.2223Z" fill="white" />
</svg>

      {/* <h2 className="flex flex-col text-[15px] md:text-[30px] text-left justify-center ml-[16px] font-[500]">
        <span>Mohammad</span>
        <span>Rehan</span>
      </h2> */}
    </div>
    <form className="app_forms-form mt-4 text-[12px] md:text-[18px]">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 md:mr-[60px]">
 
          <input type="text" name="first_name" className="w-full mt-[20px] border-2 !border-slate-100 rounded-[46px] py-4 indent-6 font-[400] bg-transparent !placeholder:text-white" placeholder="Change Name" defaultValue="Mohammad" /></div>
        <div className="w-full md:w-1/2">

          <input type="text" name="last_name" className="w-full border-2 mt-[20px] !border-slate-100 rounded-[46px] py-4 indent-6 font-[400] bg-transparent placeholder:text-white" placeholder="Last Name" defaultValue="Rehan" /></div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 md:mr-[60px]">

          <input type="password" name="password" className="w-full border-2 lg:mt-[40px] mt-[20px] !border-slate-100 rounded-[46px] py-4 indent-6 font-[400] bg-transparent placeholder:text-white" placeholder="****" /></div>
        <div className="w-full md:w-1/2">

          <input type="text" name="email" className="w-full border-2 lg:mt-[40px] mt-[20px] !border-slate-100 rounded-[46px] py-4 indent-6 font-[400] bg-transparent placeholder:text-white" placeholder="Email" defaultValue="raorehanweb@gmail.com" /></div>
      </div>

      <input type="text" name="wallet" className="wallet w-full border-2 lg:mt-[40px] mt-[20px] !border-slate-100 rounded-[46px] py-4 indent-6 font-[400] bg-transparent placeholder:text-white" placeholder="W7Wh&weyu&ysduftudsfuW7Wh&weyu&ysduftudsfu" defaultValue={0} />
      <button className="main_btn mt-10 bg-white text-black text-[15px]" type="submit">Save Changes</button>
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

export default VerifyAccount
