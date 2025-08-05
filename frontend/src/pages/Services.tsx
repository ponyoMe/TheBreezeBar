import { use } from "react";
import ReservationForm from "../components/ReservationForm";
import bbbg3 from '../assets/images/bbbg3.jpg'
import menubg from '../assets/images/menubg.png'


function Services() {
 
  
  return (
    <div className="flex flex-row justify-evenly m-7">
      <ReservationForm />
      <div className="flex flex-col items-center justify-center">
        <img src={menubg} className="w-[200px] rounded-2xl" />
      <img src={bbbg3} className="w-[200px] rounded-2xl"  />

      </div>
      
    </div>
  );
}

export default Services;