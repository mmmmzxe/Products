import React from 'react';

import { FaStar } from "react-icons/fa6";
import { ProductsData } from './data';

import Imag from '../assets/book.png'

const Products = () => {
  return (
    <div className="all">
  
        {/* Header section */}
        <div className="container">
        <p> All The books You Love</p>
         <div className='logo'>
             <img src={Imag}></img>

         <h1 className="text-c">
            <span>Books</span> Store
            
            
          </h1>
         
         </div>

          
        </div>
        {/* Body section */}
        <div>
          <div className="products">
            {/* card section */}
            {ProductsData.map((data) => (
              <div key={data.id} className="singel-Product">
                <div className='product-img'>
                <img
                  src={data.img}
                  alt=""
                  
                /></div>
                <div>
                  <h3 className="">{data.title}</h3>
                  <h4>{data.text}</h4>
                  <p className="">{data.writer}</p>
                  <div className='button'>
                      <div className="rating">
                    <FaStar className="" />
                    <span>{data.rating}</span>
                  </div>
                  <button>Read Now</button>
                </div>
                  </div>
                
              </div>
            ))}
          </div>
         
        </div>
      </div>
 
  );
};

export default Products;