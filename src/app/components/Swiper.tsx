'use client'
import { useEffect, useRef, useState } from 'react';
import '../globals.css';


export default function Swiper() {

  let [currentPage, setCurrentPage] = useState<number>(1);
  let [paginStyle, setPaginStyle] = useState<string>('#FFE2B5');
  let [paginLineLength, setPaginLineLength] = useState<number>(0)
  const paginations: any = useRef(null);
  
  useEffect(()=>{
    let time = 0;
    if(currentPage === 1){
      setPaginStyle('#FFE2B5');
    }else if(currentPage === 2){
      setPaginStyle('#FFDC62');
    }else{
      setPaginStyle('#D3FBD9');
    }
    setPaginLineLength(0);
    changeActivePagin();
    const interval = setInterval(() => {
      if(time > 99){
        setPaginLineLength(0);
        time = 0
        if(currentPage<3){
          let newCurrentPage = currentPage+1;
          setCurrentPage(newCurrentPage)
        }else if(currentPage === 3){
          setCurrentPage(1);
        }
      }else{
        setPaginLineLength(paginLineLength => paginLineLength + 2);
        time+=2
      }
    }, 200);
    return () => clearInterval(interval);
  },[currentPage]);


  const arrowHandle = (e: any) => {
    let target: any = e.target;
    let action: string | null = target.getAttribute('data-action');
    if(action === 'left'){
      if(currentPage>1){
        let newCurrentPage = currentPage-1;
        setCurrentPage(newCurrentPage)
      }else if(currentPage === 1){
        setCurrentPage(3);
      }
    }else if(action === 'right'){
      if(currentPage<3){
        let newCurrentPage = currentPage+1;
        setCurrentPage(newCurrentPage)
      }else if(currentPage === 3){
        setCurrentPage(1);
      }
    }
  }

  const changeActivePagin = () => {
    for(let el of paginations.current.children){
      el.classList.remove('pagination__item_active');
      if(parseFloat(el.getAttribute('data-action')) === currentPage){
        el.classList.add('pagination__item_active');
      }
    }
  }

  const paginationHandle = (e: any) => {
    let target: any = e.target;
    let action: number = parseInt(target.getAttribute('data-action'));
    if(action !== null){
      setCurrentPage(action);
    } 
    console.log(currentPage)
  }

  return (
    <div className="">
      <div className="swiper-container w-[100%] h-[440px] mt-[40px]">
      <div className="swiper">
          <div className="w-[100%] h-[100%] rounded-3xl" style={{ background:'#FFE2B5', display: currentPage === 1 ? 'flex' : 'none'}}></div>
          <div className="w-[100%] h-[100%] rounded-3xl" style={{ background:'#FFDC62', display: currentPage === 2 ? 'flex' : 'none'}}></div>
          <div className="w-[100%] h-[100%] rounded-3xl" style={{ background:'#D3FBD9', display: currentPage === 3 ? 'flex' : 'none'}}></div>
        </div>
        {/* start arrows */}
        <div className='row swiper__arrowGroup' onClick={arrowHandle}>
          <div className='w-[50%] h-full '>
            <div className="swiper__arrow cursor-pointer w-[80px] h-[80px]">
              <img className='w-[100%] h-[100%]' src="/arrow_left.png" data-action='left' alt="arrow" />
            </div>
          </div>
          <div className='w-[50%] h-full flex justify-end'>
            <div className="swiper__arrow cursor-pointer w-[80px] h-[80px]">
              <img className='w-[100%] h-[100%]' src="/arrow_right.png"  data-action='right' alt="arrow" />
            </div>
          </div>
        </div>
         {/* end arrows */}
         {/* start pagination */}
         <div className='pagination-container'>
          <div className='h-[60] w-full flex justify-center' ref={paginations} onClick={paginationHandle}> 
            <div className='w-[60px] h-[60px] pagination__item pagination__item_active  center' data-action='1'>
              <img className='w-[80%] h-[80%]' src="/swiper_pagination1.png" alt="Shoes" data-action='1'/>
            </div>
            <div className='w-[60px] h-[60px] pagination__item center mx-[10px]' data-action='2'>
              <img className='w-[80%] h-[80%]' src="/swiper_pagination2.webp" alt="Shoes" data-action='2'/>
            </div>
            <div className='w-[60px] h-[60px] pagination__item center' data-action='3'>
              <img className='w-[80%] h-[80%]' src="/swiper_pagination3.png" alt="Shoes"  data-action='3'/>
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
            <div className='pagination__interval  z-10 mt-[-5px]' style={{width: paginLineLength+'%'}}>
              
            </div>
          </div>
         </div>
         {/* end pagination */}
      </div>
    </div>
  );
}