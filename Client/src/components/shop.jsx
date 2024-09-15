import Navbar from "./navbar";
import styles from "./shop.module.css";
import shopImage from "../assets/shopHeader.png";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./productCard";
import Footer from "./footer";

export default function Shop() {

    const [allProducts, setProducts] = useState([]);

    const [category,setCategory]=useState("all");
    const [price,setPrice]=useState(1000);

    const loadProduct = async () => {

        const products = await axios.get("http://localhost:3000/product");
        // console.log(products.data.product);
        setProducts(products.data.product);
    }

    useEffect(() => {
        loadProduct();
    }, []);

    return (

        <>
            {/* Header */}
            <Navbar />

            {/* header Selection banner */}
            <div className={styles.Container}>

                <div className={styles.banner}>
                    <div className={styles.bannerImage}>
                        <img src={shopImage} alt="shopheader" />
                    </div>
                    <div className={styles.innerCon}>
                        <span>
                            <span style={{ color: "rgb(132 134 135)" }}>
                                Home
                            </span>
                            &gt; Shop
                        </span>
                        <h2>Shop Page</h2>
                        <h6>Lets design the place you always imagine</h6>
                    </div>
                </div>


                {/* tool section */}
                <div className={styles.filterSortContainer}>
                    <div className={styles.filters}>
                        <div className={styles.dropdown}>
                            <label htmlFor="categories">CATEGORIES</label>
                            <select id="categories" name="categories" onChange={(ev)=>setCategory(ev.target.value)}>
                                <option value="all">All category</option>
                                <option value="living">Living Room</option>
                                <option value="bedroom">Bed Room</option>
                                <option value="kitchen">Kitchen</option>
                            </select>
                        </div>
                        <div className={styles.dropdown}>
                            <label htmlFor="price">PRICE</label>
                            <select id="price" name="price" onChange={(event)=>setPrice(event.target.value)}>
                                <option value="1000">All Price</option>
                                <option value="400">400</option>
                                <option value="50">50</option>
                                <option value="20">20</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>

                    {/* <div className={styles.sortAndView}>
                        <div className={styles.sortBy}>
                            <label htmlFor="sort">Sort by</label>
                            <select id="sort" name="sort">
                                <option value="default">Default</option> */}
                                {/* Add more options as needed */}
                            {/* </select>
                        </div>
                        <div className={styles.viewOptions}>
                            <button aria-label="Grid View"><i className="fa fa-th"></i></button>
                            <button aria-label="List View"><i className="fa fa-list"></i></button>
                        </div>
                    </div> */}


                </div>


                {/* products */}
                <section className={styles.productList}>
                    {
                        (allProducts.length != 0 &&

                        allProducts.filter((product)=> category==="all" || product.category===category).filter(product=>{
                            return product.originalPrice<=price;
                        }).map((product) => {
                            console.log(product);
                            return (<ProductCard product={product} />)
                        })
                        )
                    }
                </section>
                
                <div className={styles.showMore}>
                    <span>Show More</span>
                </div>


            </div>

            <Footer/>

        </>

    )

}