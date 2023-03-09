import React from 'react'
import Card from '../Components/Card'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'
import { Link } from 'react-router-dom'
import deleteMark from '../assets/deleteMark.svg'

const CardData = {

}

const Favourite = () => {

    return (<>
    <main className="app relative h-screen overflow-x-hidden">
        <span></span>
        <span></span>
        <span></span>
    <div className="container md:w-[80%] w-[95%] flex flex-col m-auto">
     <Navbar/>
        <div className="app_search">
  <div className="flex flex-col items-start">
    <div className="app_search-input w-5/6 relative overflow-hidden">
      <h1 className='text-center font_family'>Fa<span className='!text-[#E6007A]'>vourites</span></h1>
    </div>
    <span className="app_search-results_count text-[10px] md:text-[20px] md:ml-[30px] mt-[10px] font-[300]">about 0 results</span>
  </div>
  {/* <ul className="app_search-filter_list flex justify-between items-start w-[320px] text-[12px] md:text-[25px] font-[500] pr-[79px]">
    <li className="cursor-pointer md:px-10 active">All</li>
    <li className="cursor-pointer md:px-10 ">Image</li>
    <li className="cursor-pointer md:px-10 ">Videos</li>
    <li className="cursor-pointer md:px-10 ">Articles</li>
    <li className="cursor-pointer md:px-10 " />
  </ul> */}
  {/* <div>
    <div className="app_filter rounded-[7px] w-5/6 md:w-3/6 bg-white p-[25px]">
      <div className="app_filter-menu">
        <div className="text-[10px] md:text-[20px]">
          <span className="font-[600] mr-[7px]">Data:</span>
          <span className="cursor-pointer">For All Time
            <span>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="svg-inline--fa fa-caret-down " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
              </svg>
            </span>
          </span>
        </div>
        <ul className="bg-white absolute left-[80px] md:left-[200px] w-[65px] md:w-[200px] z-[121214] border-[0.5px] rounded-[10px] px-[11px] py-[8px] border-black hidden">
          <li className="cursor-pointer border-b-[1px] text-[6px] md:text-[20px] py-[2px]">For 24 hours</li>
          <li className="cursor-pointer border-b-[1px] text-[6px] md:text-[20px] py-[2px]">For 48 hours</li>
          <li className="cursor-pointer border-b-[1px] text-[6px] md:text-[20px] py-[2px]">For 1 week</li>
          <li className="cursor-pointer border-b-[1px] text-[6px] md:text-[20px] py-[2px]">For 2 week</li>
          <li className="cursor-pointer border-b-[1px] text-[6px] md:text-[20px] py-[2px]">For 4 week</li>
          <li className="cursor-pointer border-b-[1px] text-[6px] md:text-[20px] py-[2px]">For 3 months</li>
          <li className="cursor-pointer border-b-[1px] text-[6px] md:text-[20px] py-[2px]">For 6 months</li>
          <li className="cursor-pointer border-b-[1px] text-[6px] md:text-[20px] py-[2px]">For 1 year</li>
        </ul>
      </div>
      <div className="app_filter-checks text-[10px] md:text-[20px] font-[300] flex mt-[29px]">
        <div className="w-1/2">
          <div className="flex mt-[14px] items-center">
            <input type="checkbox" className="mr-[5px]" />
            <label>Btc</label>
          </div>
          <div className="flex mt-[14px] items-center">
            <input type="checkbox" className="mr-[5px]" />
            <label>Video BTC</label>
          </div>
          <div className="flex mt-[14px] items-center">
            <input type="checkbox" className="mr-[5px]" />
            <label>Pictures BTC</label>
          </div>
          <div className="flex mt-[14px] items-center">
            <input type="checkbox" className="mr-[5px]" />
            <label>Btc</label>
          </div>
          <div className="flex mt-[14px] items-center">
            <input type="checkbox" className="mr-[5px]" />
            <label>Video BTC</label>
          </div>
          <div className="flex mt-[14px] items-center">
            <input type="checkbox" className="mr-[5px]" />
            <label>Pictures BTC</label>
          </div>
        </div>
        <div>
          <div className="flex mt-[14px] items-center">
            <input type="checkbox" className="mr-[5px]" />
            <label>en</label>
          </div>
          <div className="flex mt-[14px] items-center">
            <input type="checkbox" className="mr-[5px]" />
            <label>ar</label>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  <div className=' relative z-10'>
  <Card/>
  <Card/>
  <Card/>
    {/* <div className="mt-16 text-center text-slate-500 text-[25px]">No articles Found</div> */}
  </div>
  <div />
</div>
<Footer/>
</div>
</main>

    </>
    )
    }

    export default Favourite
