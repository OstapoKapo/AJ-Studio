import { Swiper } from './components';
import './globals.css';
import { register } from "swiper/element/bundle";
register();

export default function Home() {
  return (
    <div className="h-min w-full">
      <Swiper />
    </div>
  );
}
