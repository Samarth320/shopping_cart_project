import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {

  const {cart} = useSelector( (state)=> state );
  console.log("printing cart",cart);

  const state = useSelector( (state)=> state );
  console.log("printing state",state);

  const [totalAmount , setTotalAmout] = useState(0);

  useEffect( ()=>{
    setTotalAmout( cart.reduce( (acc , curr) => acc + curr.price , 0 ) );
  },[cart])

  return (
    <div>
       {
         cart.length > 0 ? (<div className="flex flex-wrap justify-evenly max-w-6xl mx-auto mt-10 gap-40">

                               <div>
                                 {
                                  cart.map( (item ,index)=> {
                                    return <CartItem key={item.id} item={item} itemIndex={index} />
                                  }  )
                                 }
                               </div>

                                <div className="w-1/3 mt-9 mb-10 flex flex-col justify-between">
                                      <div>
                                          <div className="text-green-800 font-bold uppercase text-lg text-left">Your Cart</div>
                                          <div className="text-green-800 font-bold uppercase text-5xl text-left">Summary</div>
                                          <p className="mt-4">
                                            <span className="text-gray-700 font-semibold text-md text-left">
                                               Total Items: {cart.length}
                                             </span>
                                          </p>
                                      </div>
                                      
                                      <div>
                                          <p className="text-gray-700 font-semibold text-lg text-left">Total Amount: <span className="text-black font-bold">${totalAmount}</span></p>
                                          <button 
                                            class="bg-green-700 text-white font-bold py-2 px-4 rounded w-full mt-2">
                                            CheckOut Now 
                                          </button>
                                      </div>
                                </div>

                             </div>)

                         : (<div className="w-full h-[100vh] flex flex-col justify-center items-center">

                            <h1 className="text-gray-700 font-semibold text-lg text-left">Cart Empty</h1>

                            <Link to={"/"}>
                              <button className="bg-green-700 text-white font-bold py-2 px-8 rounded  mt-4">
                                 Shop Now
                              </button>
                            </Link>

                           </div>) 
       }
    </div>
  );
};

export default Cart;
