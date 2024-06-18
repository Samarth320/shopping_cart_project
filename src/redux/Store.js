import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/cartSlice";


export const store = configureStore(
    {
        reducer:{
            cart:CartSlice.reducer //yaha pe bahot error aaraha tha ".reducer nahi lagaya to"
        }
    }
)