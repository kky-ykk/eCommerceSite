import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";
import styles from './home.module.css';


export function BottomFooter(){
    return (

        <>

<footer className={styles.footer}>
                <div className={styles.footerTop}>
                    <div className={styles.logo}>Elegant</div>
                    <span>G & J Decoration Store</span>
                    <nav className={styles.navigation}>
                        <a href="/">Home</a>
                        <a href="/shop">Shop</a>
                        <a href="/product">Product</a>
                        <a href="/blog">Blog</a>
                        <a href="/cart">Cart</a>
                        <a href="/contact-us">Contact Us</a>
                    </nav>
                </div>
                <div className={styles.footerBottom}>
                    <p style={{ color: "white" }}>Copyright © 2016 Elegant. All rights reserved.</p>
                    <div className={styles.policyLinks}>
                        <a href="/privacy-policy">Privacy Policy</a> |
                        <a href="/terms-of-use">Terms of Use</a>
                    </div>
                    <div className={styles.socialMediaIcons}>
                        <a href="#" aria-label="Facebook"><FiFacebook /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="youtube"><CiYoutube /></a>
                    </div>
                </div>
            </footer>

        </>

    )
}

export default function Footer() {
    return (
        <>

            {/* Newsletter Section */}
            <div className={styles.newsletter}>

                <h2>Join Our Newsletter</h2>
                <p>Sign up for deals, new products and promotions</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" placeholder="Enter your email" />
                    </div>
                    <button type="submit">Signup</button>
                </form>
            </div>


            {/* Footer */}
            <BottomFooter/>

        </>
    )
}