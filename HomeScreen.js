import React, {useState} from 'react';
import data from '../data';
import {Link} from 'react-router-dom';

function HomeScreen (props) {
   const [products,setProduct] = useState    //to fetch data from the server
    return <ul className="products">
    {                                        //converting static li to dynamic li based on the data that comes from data.products
      data.products.map(product => 
        <li>
      <div className="product">
      <Link to={'/product/'+ product._id}>
         <img className="product-image" src={product.image} alt="Product"/>        
      </Link>                        
           <div className="prdouct-name">
              <Link to={'/product/'+ product._id}>{product.name}</Link>         {/*when product name is clicked go to prod details*/}
           </div>
           <div className="product-brand">{product.brand}</div> 
           <div className="product-price"> ${product.price}</div> 
           <div className="product-rating">{product.rating} Stars {product.numReviews}</div>
       </div>
     </li> )
    }
   </ul>
}
export default HomeScreen;
