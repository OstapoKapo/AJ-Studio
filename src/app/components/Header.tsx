import React from 'react';
import '../globals.css';

export default function Header() {
    return (
        <header className=' w-full h-min flex justify-around items-center'>

          <div className='flex w-[33%] justify-start'>
            <div className='block h-[50px] w-[110px] text-[18px] mr-[20px] center'>
              <div className='burger w-[20px] h-min  flex-row mr-[10px]'>
                <div className='w-[100%] bg-black h-[2px]'></div>
                <div className='w-[75%] bg-black h-[2px] my-[5px]'></div>
                <div className='w-[50%] bg-black h-[2px]'></div>
              </div>
              Menu
            </div>
            <div className='block h-[50px] w-[200px] text-[18px] font-semibold flex items-center'>
                <div className=' w-[20px] h-[20px] mx-[10px]'>
                    <img className='w-[100%] h-[100%]' src="/search.png" alt="" />
                </div>
                <input type="text" className='border-0 bg-inherit w-[70%]' placeholder='Search'/>
            </div>
          </div>

          <div className=' justify-center'>
            <div className='w-[74px] h-[70px]'>
                <img className='w-[100%] h-[100%]' src="/logo.png" alt="" />
            </div>
          </div>

          <div className='flex w-[33%] justify-end'>
            <div className='w-[25px] h-[25px]'>
                <img className='w-[100%] h-[100%]' src="/User.png" alt="" />
            </div>

            <div className='w-[25px] h-[25px] mx-[30px]'>
                <img className='w-[100%] h-[100%]' src="/Heart.png" alt="" />
            </div>

            <div className='min-w-[40px] h-[25px] center'>
                <img className='w-[25px] h-[25px]' src="/Cart.png" alt="" />
                <div className='w-[30px] h-[30px] ml-[5px] bg-red-500 center text-white rounded-full'>1</div>
            </div>

            <div className='block center w-[70px] h-[30px] ml-[50px] mr-[100px]'>
                <select name="language" id="language" className='bg-inherit mt-[-2px] onFocus'>
                    <option value="ENG">ENG</option>
                    <option value="UA">UA</option>
                </select>
            </div>

            {/* <div className='block center w-[70px] h-[30px] ml-[10px]'>
                <select name="language" id="language" className='bg-inherit mt-[-2px] '>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                </select>
            </div> */}
          </div>
        </header>
    );
  }