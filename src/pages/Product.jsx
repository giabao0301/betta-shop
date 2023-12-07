import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Layout/Content/Breadcrumb';
import ProductDisplay from '../components/Layout/Content/ProductDisplay';
import RelatedProducts from '../components/Layout/Content/RelatedProducts';
import all_product from '../assets/all_product';

function Product() {
    const { productId } = useParams();
    const product = all_product.find((item) => item.id === Number(productId));
    return (
        <div className="mt-navbarHeight">
            <Breadcrumb product={product} />
            <ProductDisplay product={product} />
            <RelatedProducts product={product} />
        </div>
    );
}

export default Product;
