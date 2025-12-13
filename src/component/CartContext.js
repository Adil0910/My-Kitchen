import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const add = (item) => {
  const exist=cart.find(x=>x.id===item.id)
  if(exist){
    cart.map(x=>x.id===item.id ? {...x,qty:x.qty+item.qty}:x)
  }else{
    setCart([...cart,item])
  }
  };


      const changeQty = (id, delta) => {
    setCart(prev =>
      prev
        .map(p =>
          p.id === id ? { ...p, qty: p.qty + delta } : p
        )
        .filter(p => p.qty > 0)
    );
  };

 const cartCount = cart.length;


  return (
    <CartContext.Provider value={{ cart, add, changeQty, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}
