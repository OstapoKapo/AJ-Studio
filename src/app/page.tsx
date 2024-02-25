'use client'
import { useRef, useState } from 'react';
import { GoodsContainer, Swiper } from './components';
import './globals.css';
import { register } from "swiper/element/bundle";
register();

export default function Home() {

  const [currency, setCurrency] = useState<string>('USD');
  const selectCur = useRef<any>(null);

  const changeCurrencyHandle = (e: any) => {
    setCurrency(selectCur.current.value)
  }

  return (
    <div className="h-min w-full">
       <div className='block currency center w-[70px] h-[30px] ml-[10px]'>
          <select name="language" id="language" className='bg-inherit mt-[-2px]' onChange={changeCurrencyHandle} ref={selectCur}>
              <option value="USD">USD</option>
              <option value="UAH">UAH</option>
          </select>
      </div>
      <Swiper />
      <GoodsContainer currency={currency} setCurrency={setCurrency}/>
    </div>
  );
}
