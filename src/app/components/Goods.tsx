'use client'
import { useEffect, useState } from 'react';
import '../globals.css';
import axios from 'axios';
import { Product } from '../../../types';

const Goods: React.FC<Product> = ({name, price, img, discount, events, _id}) => {

  const bgColors: Array<string> = ['#7BE498', '#F5E6FF', '#F7C29B', '#68EAEB'];
  const [randomColor, setRandomColor] = useState<string>('');

  useEffect(()=>{
    const random = Math.floor(Math.random() * bgColors.length);
    setRandomColor(bgColors[random]);
  },[]);



   
  return (
    <div className="h-min w-[245px] mx-[10px] my-[20px] flex-wrap ">
       <div className='w-full h-[280px] rounded-3xl' style={{backgroundColor: randomColor}} >
        <img className='w-full h-full' src={'/' + img} alt="shoe" />
       </div>
       <div className='mt-[20px] w-full h-min px-[15px]'>
         <h1 className='font-bold text-[20px] w-full'>{name}</h1>
         {discount.state ? (
          <div className='flex'>
            <div className='font-medium text-[17px] text-red-600'>{Math.round((price-((price*discount.percentages)/100)))+'$'}</div>
            <s className='font-medium text-[17px] ml-[10px]'>{price+'$'}</s>
          </div>
         ) : (
          <div className='font-medium text-[17px]'>{price+'$'}</div>
         )}
         <div className='row mt-[10px]'>
            <div className='w-[50%] h-full'>
                <div className='center rounded-[25px] p-[10px] h-[25px] text-[15px] w-[70px] text-cyan-700 font-semibold ' style={{backgroundColor: '#CFE2FD'}}>Colours</div>
            </div>
            <div className='w-[50%] h-full flex justify-start'>
                <div className="good__colourItem center good__colourItem_active mx-[2px] p-[1px]">
                    <div className='w-[100%] h-[100%] rounded-[100%] bg-black'></div>
                </div>
                <div className="good__colourItem center mx-[2px] p-[1px]">
                    <div className='w-[100%] h-[100%] rounded-full bg-red-700'></div>
                </div>
                <div className="good__colourItem  center mx-[2px] p-[1px]">
                    <div className='w-[100%] h-[100%] rounded-full bg-green-700'></div>
                </div>
                <div className="good__colourItem  center mx-[2px] p-[1px]">
                    <div className='w-[100%] h-[100%] rounded-full bg-orange-300'></div>
                </div>
            </div>
         </div>
         <div className='block w-full center h-[45px] mt-[15px]'>
            <img className='w-[20px] h-[20px] mr-[5px]' src="/cart2.png" alt="cart" />
            Add to cart
         </div>
       </div>
    </div>
  );
}

export default Goods;