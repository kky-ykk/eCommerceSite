import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";


// import styles from './home.module.css';
import styles from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import Cart from "./cart";
import { useState } from "react";
import { useCart } from "../contextProvider/contextReducer";


export default function Navbar(){

    console.log(localStorage.getItem("token"));

    const [cart,setCart]=useState(false);
    const navigate=useNavigate();
    

    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>3legant.</div>
                <nav className={styles.navLinks}>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="#">Product</Link>
                    <Link to="#">Contact Us</Link>
                </nav>
                <div className={styles.headerIcons}>
                    <Link to="#"><CiSearch /></Link>
                    {
                        !localStorage.getItem("token")?
                        (
                            <span>
                                 <button className={styles.signUp} onClick={()=>{navigate("/signup")}}>Sign Up</button>
                                 <button className={styles.login} onClick={()=>{navigate("/login")}}>Login</button>
                            </span>
                        )
                        :(
                        <span>
                            <a href="#" onClick={()=>setCart(true)}>
                                <LiaShoppingBagSolid />
                                <span className={styles.noItems}>{useCart().length}</span>
                            </a>
                            <a href="#"><VscAccount /></a>
                        </span>
                        )
                    }
                    {
                        cart &&   <Cart setCart={setCart}/>
                    }
                </div>
            </header>
        
        </>
    )

}