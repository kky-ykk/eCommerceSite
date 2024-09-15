import React, { useContext, useEffect, useState } from 'react';
import styles from './home.module.css';
import { FaShippingFast } from "react-icons/fa";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { LuLock } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";


import carousel1 from "../assets/carousel-1.svg";
import carousel2 from "../assets/carousel-2.png";
import carousel3 from "../assets/carousel-3.png";

import bottomImage from "../assets/bottomImage.png";
import kitchen from "../assets/kitchen.svg";
import livingRoom from "../assets/LivingRoom.svg";
import bedRoom from "../assets/bedRoom.svg";
import { Link } from 'react-router-dom';
import ProductCard from './productCard';
import axios from 'axios';
import Navbar from './navbar';
import Footer from './footer';

const HomePage = () => {
  const [allProducts, setProducts] = useState([]);

  const loadProduct = async () => {

    const products = await axios.get("http://localhost:3000/product");
    // console.log(products.data.product);
    setProducts(products.data.product);
  }

  useEffect(() => {
    loadProduct();
  }, []);

  // console.log(allProducts);

  return (
    <div className={styles.homepage}>

      
          {/* Header */}
          <Navbar />
      
      <div className={styles.paddedSection}>


        {/* Hero Section */}
        <section className={styles.hero}>

          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={carousel1}
                  className="d-block w-100 h-95"
                  style={{
                    // filter: "brightness(55%)",
                    objectFit: "contain",
                    height: "430px",
                  }}
                  alt="Slide 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={carousel2}
                  className="d-block w-100 h-95"
                  style={{
                    filter: "brightness(70%)",
                    objectFit: "cover",
                    height: "430px",
                  }}
                  alt="Slide 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={carousel3}
                  className="d-block w-100 h-95"
                  style={{
                    filter: "brightness(70%)",
                    objectFit: "cover",
                    height: "430px",
                  }}
                  alt="Slide 3"
                />
              </div>
            </div>

            {/* Add Previous and Next Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="text-dark fs-3 bg-white px-2 rounded-circle">←</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <div className='text-dark fs-3 bg-white px-2 rounded-circle' >→</div>
            </button>
          </div>

          <h1>Simply Unique/Simply Better.</h1>
          <p>3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019.</p>
        </section>



        <div className="container">
          <div className="row">
            {/* Left side - Living Room */}
            <div className="col-md-6">
              <div className="position-relative" style={{ height: "100%" }}>
                {/* Image tag for Living Room */}
                <img
                  src={livingRoom}
                  alt="Living Room"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
                <div className="position-absolute" style={{ top: "20px", left: "20px" }}>
                  <h2>Living Room</h2>
                  <button className="btn btn-link">Shop Now &rarr;</button>
                </div>
              </div>
            </div>

            {/* Right side - Bedroom & Kitchen */}
            <div className="col-md-6">
              <div className="row">
                {/* Top right - Bedroom */}
                <div className="col-md-12">
                  <div className="position-relative" style={{ height: "95%" }}>
                    {/* Image tag for Bedroom */}
                    <img
                      src={bedRoom}
                      alt="Bedroom"
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="position-absolute" style={{ top: "20px", left: "20px" }}>
                      <h2>Bedroom</h2>
                      <button className="btn btn-link">Shop Now &rarr;</button>
                    </div>
                  </div>
                </div>

                {/* Bottom right - Kitchen */}
                <div className="col-md-12">
                  <div className="position-relative" style={{ height: "100%" }}>
                    {/* Image tag for Kitchen */}
                    <img
                      src={kitchen}
                      alt="Kitchen"
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="position-absolute" style={{ top: "20px", left: "20px" }}>
                      <h2>Kitchen</h2>
                      <button className="btn btn-link">Shop Now &rarr;</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="newArrival">
          <h2 style={{ float: "left" }}>New Arrivals</h2>
          <Link to="#" style={{ float: 'right', color: 'black' }}>More products &rarr;</Link>
        </div>

        <section className={styles.productList}>
          {
            (allProducts.length != 0 &&

              allProducts.slice(0, 4).map((product) => {
                console.log(product);
                return (<ProductCard product={product} />)
              })
            )
          }
          {/* <ProductCard/> */}
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.feature}>
            <FaShippingFast fontSize="4em" />
            <p>Free Shipping</p>
          </div>
          <div className={styles.feature}>
            <LiaMoneyBillSolid fontSize="4em" />
            <p>Money-back</p>
          </div>
          <div className={styles.feature}>
            <LuLock fontSize="4em" />
            <p>Secure Payments</p>
          </div>
          <div className={styles.feature}>
            <IoCallOutline fontSize="4em" />
            <p>24/7 Support</p>
          </div>
        </section>
      </div>
      {/* Sale Section */}
      <section className={styles.sale}>
        <img src={bottomImage} alt="Sale Banner" />

        <div>
          <h6 style={{ color: "#377DFF" }}>Sale up to 35% Off</h6>
          <h4>
            HUNDREDS of <br></br> New lower prices!
          </h4>
          <div style={{ color: "#141718" }}>
            It’s more affordable than ever to give every room in your home a stylish makeover
          </div>
          <Link to="#" style={{ color: "black" }}>
            Shop Now &rarr;
          </Link>
        </div>
      </section>
      
      {/* footer */}
      <Footer/>

    </div>
  );
};

export default HomePage;
