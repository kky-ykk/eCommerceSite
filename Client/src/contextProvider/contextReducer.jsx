import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";


const CartStateContext=createContext();
const CartDispatchContext=createContext();

const reducer=(currItem,action)=>{
    let newData=[];
    console.log("here:",action);
    switch (action.type) {
        case "ADD":
            action.payload.quantity=1;
            return [...currItem,action.payload]
            break;
        case "Remove":
            console.log(action.payload);
            currItem=currItem.filter(item=>{
                return item._id!=action.payload;
            })
            return currItem;
            break;    
        default:
            break;
    }
    
    return newData;

}

export default function CartProvider({children}) {
    
    const[state,dispatch]=useReducer(reducer,[]);

    console.log("state::",state);

    return (
        
            <CartDispatchContext.Provider value={dispatch}>
                <CartStateContext.Provider value={state}>
                    {children}
                </CartStateContext.Provider>
            </CartDispatchContext.Provider>

    )
}

export const useCart=()=> useContext(CartStateContext);
export const useDispatchCart=()=>useContext(CartDispatchContext);

