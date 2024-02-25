'use client'
import  Goods  from './Goods';
import '../globals.css';
import { useEffect, useState } from 'react';
import { Currency, Product } from '../../../types';
import axios from 'axios';

const GoodsContainer: React.FC<Currency> = ({currency, setCurrency}) => {

  const [products, setProducts] = useState<[Product]>();

  useEffect(()=>{
     const posrthandle = async () => {
      await axios.get('/api/products', {})
      .then((response) => {
         if(response.status !== 400){
          setProducts(response.data.products)
         }else{
             console.log('error');
         }
      })
      .catch((error) => {
          console.error('Error:', error);
      });
    }
    posrthandle();
  },[])

  return (
    <div className="h-min w-full mt-[50px] flex flex-wrap justify-around">
      {products?.map((item: Product)=>( <Goods currency={currency} setCurrency={setCurrency}  key={item._id} _id={item._id} name={item.name} price={item.price} img={item.img} events={item.events} discount={item.discount}/>))}
    </div>
  );
}

export default GoodsContainer;