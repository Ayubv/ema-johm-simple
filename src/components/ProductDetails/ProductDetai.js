import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetai = () => {
    const {productKey}=useParams()
    const product=fakeData.find(pd=>pd.key===productKey);
    console.log(product);
    return (
        <div>
           <h1>Your Product Details</h1>
          <Product  showAddToCard={false} product={product}></Product>
        </div>
    );
};

export default ProductDetai;