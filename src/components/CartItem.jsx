import React from 'react'
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {remove} from "../redux/Slices/cartSlice";


const CartItem = ({item,itemIndex}) => {

  const dispatch = useDispatch();

  function removeFromCart()
  {
    dispatch(remove(item.id))
    toast.error("Item Removed");
  }

  return (
    <div className='flex flex-col items-center max-w-xl p-10 gap-y-3 '>
       
        <div className='flex items-center gap-x-10 '>

              <div className='w-[30%]'>
                <img src={item.image} className='h-[170px] mx-auto' />
              </div>

              <div className='w-[65%] flex flex-col items-center gap-y-4' >

                  <h1 className="text-gray-700 font-semibold text-lg text-left">{item.title}</h1>

                  <h1 className="w-full text-gray-600 font-normal text-[14px] text-left">
                             {item.description.split(" ").slice(0,15).join(" ")+"..."}
                  </h1>

                  <div className='w-full flex justify-between'>

                    <p className="text-green-600 font-semibold mt-3">${item.price} </p>

                    <div
                     className='mr-4 mt-1 p-1 bg-red-300 rounded-full'
                     onClick={removeFromCart}>
                      <MdDelete className='text-2xl ' />
                    </div>

                  </div>

              </div>

        </div>

       <hr className='w-full h-0.5 bg-black'></hr>

    </div>
  )
}

export default CartItem
