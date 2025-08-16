import React from "react";
import { cartData } from "../data";
const Products = () =>{
   return(
    <>
       { cartData.map((item)=>(
       <div key={item.id} className="w-[90%] bg-white h-[30%] grid grid-cols-3 rounded-xl">
         <div className="flex justify-center p-2">
            <img className="w-[50%] h-[90%] object-cover" src={item.imageUrl}/>
         </div>
         <div className="col-span-2 flex flex-col text-black gap-5 p-3">
            <p className="text-xl font-bold">
               {item.name}
            </p>
            <p className="text-sm">
              {item.description}
            </p>
            <div className="flex gap-4 items-center justify-between">
              <p className="text-m text-[#C9A0DC]  font-bold">&#8377;{item.price}</p>
              <div className="flex items-center gap-2 bg-[#C9A0DC]/50">
               <button className="px-2 text-lg text-white bg-[#C9A0DC] font-medium">
                 +
               </button>
               <p className="text-sm font-medium">{item.quantity}</p>
               <button className=" px-2.5 text-white text-lg bg-[#C9A0DC] font-medium">
                  -
               </button>
              </div>
              <button className="bg-red-500 px-3 font-medium rounded-xl py-1 text-white">remove</button>
            </div>
         </div>
    </div>
       ))
      }
    </>
   );
}

export default Products