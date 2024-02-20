'use client'
import { useEffect, useState } from 'react';
import '../globals.css';


export default function Swiper() {

  let [currentPage, setCurrentPage] = useState<number>(2);
  let [paginStyle, setPaginStyle] = useState<string>('#FFE2B5')

  useEffect(()=>{
    if(currentPage === 1){
      setPaginStyle('#FFE2B5')
    }else if(currentPage === 2){
      setPaginStyle('#FFDC62')
    }else{
      setPaginStyle('#D3FBD9')
    }
  },[currentPage])

  return (
    <div className="">
      <div className="swiper-container w-[100%] h-[440px] mt-[40px]">
      <div className="swiper">
          <div className="w-[100%] h-[100%] rounded-3xl" style={{ background:'#FFE2B5', display: currentPage === 1 ? 'flex' : 'none'}}></div>
          <div className="w-[100%] h-[100%] rounded-3xl" style={{ background:'#FFDC62', display: currentPage === 2 ? 'flex' : 'none'}}></div>
          <div className="w-[100%] h-[100%] rounded-3xl" style={{ background:'#D3FBD9', display: currentPage === 3 ? 'flex' : 'none'}}></div>
        </div>
        {/* start arrows */}
        <div className='row swiper__arrowGroup'>
          <div className='w-[50%] h-full '>
            <div className="swiper__arrow_prev w-[80px] h-[80px]">
              <img className='w-[100%] h-[100%]' src="/arrow_left.png" alt="" />
            </div>
          </div>
          <div className='w-[50%] h-full flex justify-end'>
            <div className="swiper__arrow_next w-[80px] h-[80px]">
              <img className='w-[100%] h-[100%]' src="/arrow_right.png" alt="" />
            </div>
          </div>
        </div>
         {/* end arrows */}
         {/* start pagination */}
         <div className='pagination-container'>
          <div className='h-[60] w-full flex justify-center'> 
            <div className='w-[60px] h-[60px] pagination__item  center'>
              <img className='w-[80%] h-[80%]' src="/swiper_pagination1.png" alt="Shoes" />
            </div>
            <div className='w-[60px] h-[60px] pagination__item center mx-[10px]'>
              <img className='w-[80%] h-[80%]' src="/swiper_pagination2.webp" alt="Shoes" />
            </div>
            <div className='w-[60px] h-[60px] pagination__item center'>
              <img className='w-[80%] h-[80%]' src="/swiper_pagination3.png" alt="Shoes" />
            </div>
          </div>
          <div className='h-min w-[200px] flex items-start flex-col mt-[20px]'>
            <div className='flex '>
              <div className="pagination__interval__item "></div>
              <div className='w-[3px] h-[5px z-50' style={{background: paginStyle}}></div>
              <div className="pagination__interval__item"></div>
              <div className='w-[3px] h-[5px] z-50' style={{background: paginStyle}}></div>
              <div className="pagination__interval__item"></div>
            </div>
            <div className='pagination__interval z-10 mt-[-5px]'>
              
            </div>
          </div>
         </div>
         {/* end pagination */}
      </div>
    </div>
  );
}