import React, { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { useDispatchCart } from "../contextProvider/contextReducer";


const ProductCard = ({product}) => {

  const [heart,setheart]=useState(false);
  const dispatch=useDispatchCart();


  return (
    <div className="card" style={{ width: "200px", border: "none", marginTop:"50px" }}>
      <div className="position-relative">
        {/* Top-left labels */}
        <div className="position-absolute" style={{ top: "10px", left: "10px" }}>
          <span className="badge bg-light text-dark me-2">NEW</span>
          <span className="badge bg-success">-50%</span>
        </div>

        {/* Top-right heart icon */}
        <div className="position-absolute" style={{ top: "10px", right: "10px" }}>
          <button className="btn btn-light rounded-circle p-2" onClick={(ev)=>setheart(true)}>
            <FaHeart color={heart?"red":""}  />
          </button>
        </div>

        {/* Product image */}
        <img
          src={product.images[0]}
          className="card-img-top"
          alt="Product"
          style={{ height: "200px", objectFit: "cover" }}
        />
      </div>

      <div className="card-body text-center">
        {/* Add to cart button */}
        <button className="btn btn-dark w-100 mb-3" onClick={(e)=>{dispatch({type:"ADD",payload:product})}}>Add to cart</button>

        {/* Product details */}
        <div className="d-flex justify-content-center align-items-center mb-2">
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
        </div>

        <h6 className="card-title">{product.name}</h6>
        <p className="card-text">
          <strong>${product.originalPrice}</strong> <del>${product.originalPrice}</del>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
