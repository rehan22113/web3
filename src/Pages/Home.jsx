import React from 'react'
import Navbar from '../Layout/Navbar'
import logo from '../assets/logo.png'
import Footer from '../Layout/Footer'
import { Link } from 'react-router-dom'
import '../App.css'

const Home = () => {
  const [text,setText] = React.useState("")
    return (<>
        <div id="root">
  <main className="app relative h-screen overflow-x-hidden">
        <span></span>
        <span></span>
        <span></span>
    <div className="container md:w-[80%] w-[95%] flex flex-col m-auto">
     <Navbar/>
      <div className="app_main pt-16 xl:pt-36">
        <div className="container lg:w-[60%] m-auto">
          <div className="items-center text-center">
            <h1 className="text-[28px] md:text-[50px] font-[700]">The multichain vision for
              <br />
              <span>Web3
              </span>starts here</h1>
            <div className="flex flex-col items-center my-6">
              <div className="app_search-input w-full relative overflow-hidden">
                <span className="absolute md:left-[10%] left-[11%] top-[15px] md:top-[16px] cursor-pointe text-[15px] md:text-[22px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor ' className='md:w-8 w-6' viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>

                </span>
                <input onChange={(e)=>setText(e.target.value)} type="text" required className="w-10/12 border-2 rounded-[46px] h-[47px] md:h-[4rem] indent-[30px] lg:indent-[50px] text-[15px] md:text-[20px]" defaultValue={text} />
                <span className="absolute md:right-[11%] right-[12%] top-[15px] md:top-[16px] cursor-pointer text-[16px] md:text-[23px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' className='md:w-6 w-4' viewBox="0 0 384 512"><path d="M176 0C123 0 80 43 80 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM48 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H104c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H200V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" /></svg>
                </span>

              </div>
              <div className="md:flex justify-start w-full px-20 space-x-3 py-2 hidden">
              <button className="btn text-[12px] md:text-[13px] !py-2 px-[32px] md:px-[40px]">Bitcoin</button>
              <button className="btn text-[12px] md:text-[13px] px-[32px] md:px-[40px]">Polkadot</button>
              <button className="btn text-[12px] md:text-[13px] px-[32px] md:px-[40px]">ETH</button>
              <button className="btn text-[12px] md:text-[13px] px-[32px] md:px-[40px]">USDT</button>
            </div>
              <Link className="main_btn mt-8 text-[15px] md:text-[25px] px-[85px] md:px-[150px]" to={`/search?searchKey=${text}`}>Search</Link>
            </div>
            <div className="flex justify-evenly">
              <button className="btn text-[12px] md:text-[17px] px-[32px] md:px-[50px]">Polkadot Search</button>
              <button className="btn text-[12px] md:text-[17px] px-[32px] md:px-[50px]">Feeling Lucky</button>
            </div>
          </div>
        </div>
      </div>
     <Footer/>
    </div>
  </main>
</div>

                            </>
                            )
                            }
                            
                            export default Home
