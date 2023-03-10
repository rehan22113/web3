import React from 'react'
import Card from '../Components/Card'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'
import { Link } from 'react-router-dom'
import deleteMark from '../assets/deleteMark.svg'


const Search = () => {
    const [text,setText] = React.useState("");
  const [type,setType] = React.useState("All")
  const [active,setActive] = React.useState({
    all:true,
    image:false,
    article:false,
    video:false
  })
    const Mic =()=>{
      navigator.mediaDevices
    .getUserMedia({ video: false, audio: true })
    .then((stream) => {
      window.localStream = stream; // A
      window.localAudio.srcObject = stream; // B
      window.localAudio.autoplay = true; // C
    })
    .catch((err) => {
      console.error(`you got an error: ${err}`);
    });
    }

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
      <Link className="text-[#e6007a] absolute left-[2%] top-[15px] md:top-[16px] cursor-pointe text-[15px] md:text-[22px]">
      <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor ' className='md:w-8 w-6' viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
      </Link>
      <input value={text} onChange={(e)=>setText(e.target.value)} type="text" required className="w-10/12 border-2 rounded-[46px] h-[47px] md:h-[4rem] md:indent-[40px] indent-[20px] px-3 lg:indent-[50px] text-[15px] md:text-[20px]" />
      {text.length>0 &&
      <img onClick={()=>setText("")} className="absolute md:right-[24%] right-[5.5rem] top-[23%] md:top-[27%] w-[13px] md:w-[24px] cursor-pointer h-[30px] md:h-[32px] border-black" src={deleteMark} alt="Delete Search Text"  />
      }
      <span className=" h-[47px] top-[5px] md:top-0 md:h-[72px] w-[1px] absolute md:right-[23%] right-20 bg-black" />
      <span onClick={Mic} className="absolute md:right-[19%] right-[3.5rem]  top-[15px] md:top-[16px] cursor-pointer text-[16px] md:text-[23px]">
      <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' className='md:w-6 w-4' viewBox="0 0 384 512"><path d="M176 0C123 0 80 43 80 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM48 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H104c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H200V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" /></svg>
      </span>
    </div>
    <span className="app_search-results_count text-[10px] md:text-[20px] md:ml-[30px] mt-[10px] font-[300]">about 0 results</span>
  </div>
  <ul className="app_search-filter_list flex justify-between items-start w-[320px] text-[12px] md:text-[25px] font-[500] pr-[79px]">
    <li onClick={(e)=>{setType("All");setActive({image: false,article: false,video: false,all:true})}} className={`cursor-pointer md:px-10 ${active.all?'active':''}`}>All</li>
    <li onClick={(e)=>{setType("image");setActive({image: true,article: false,video: false,all:false})}} className={`cursor-pointer md:px-10 ${active.image?'active':''}`}>Image</li>
    <li onClick={(e)=>{setType("Video");setActive({image: false,article: false,video: true,all:false})}} className={`cursor-pointer md:px-10 ${active.video?'active':''}`}>Videos</li>
    <li onClick={(e)=>{setType("Article");setActive({image: false,article: true,video: false,all:false})}} className={`cursor-pointer md:px-10 ${active.article?'active':''}`}>Articles</li>
    <li className="cursor-pointer md:px-10 " />
  </ul>
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
  <Card type={type} text={text}/>
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

    export default Search
