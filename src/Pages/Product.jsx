import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const { all_product } = useContext(ShopContext); // Get products from context
  const { productId } = useParams(); // Get productId from URL
  const product = all_product.find((e) => e.id === Number(productId)); // Find the product by id

  return (
    <div>
      <Breadcrum product={product} /> {/* Pass the product */}
      <ProductDisplay product = {product}/>
    </div>
  );
};

export default Product