import  Goods  from './Goods';
import '../globals.css';

export default function GoodsContainer() {
  return (
    <div className="h-min w-full mt-[50px] flex flex-wrap justify-around">
      <Goods />
      <Goods />
      <Goods />
      <Goods />
    </div>
  );
}