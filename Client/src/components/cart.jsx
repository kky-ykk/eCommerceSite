import React, { useState } from 'react';
import styles from './Cart.module.css';

import blackTray from "../assets/api-blackTray.png";
import { useCart, useDispatchCart } from '../contextProvider/contextReducer';

const Cart = ({setCart}) => {

    const cartItems = useCart();
    console.log("cartItem::", cartItems);
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatchCart();
    

    let total = 0;

    return (
        <div className={styles.cartContainer}>
            <div className={styles.cartHeader}>
                <h2>Cart</h2>
                <button className={styles.closeButton} onClick={()=>setCart(false)}>X</button>
            </div>

            <div className={styles.cartItems}>
                {cartItems.map(item => {

                    total += item.originalPrice;

                    return (

                        <div key={item.id} className={styles.cartItem}>
                            <img src={item.images[0]} alt={item.name} className={styles.productImage} />
                            <div className={styles.productDetails}>
                                <h4>{item.name}</h4>
                                <p>Color:Black</p>
                                <div className={styles.quantitySelector}>
                                    <button onClick={() => { setQuantity(prev => prev - 1); }}>-</button>
                                    <span>{quantity}</span>
                                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                                </div>
                            </div>
                            <div className={styles.productPrice}>
                                <p>${item.originalPrice * quantity}</p>
                                <button className={styles.removeButton} onClick={()=>dispatch({type:"Remove",payload:item._id})}>X</button>
                            </div>
                        </div>
                    )
                }
                )}
            </div>

            <div className={styles.cartSummary}>
                {/* <div className={styles.subtotal}>
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div> */}
                <div className={styles.total}>
                    <span>Total</span>
                    <span>${total * quantity}</span>
                </div>
                <button className={styles.checkoutButton}>Checkout</button>

            </div>
        </div>
    );
};

export default Cart;
