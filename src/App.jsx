import GenereMovieList from "./Components/GenereMovieList";
import Header from "./Components/Header";
import ProductionHouse from "./Components/ProductionHouse";
import Slider from "./Components/Slider";

export default function App() {
  return (
   <div className=' bg-[#131520]'>
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <GenereMovieList/>
   </div>
  )
}