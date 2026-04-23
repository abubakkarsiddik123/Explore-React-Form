import React, { useState } from 'react';
import ProductsForm from './ProductsForm';
import ProductsTable from './ProductsTable';

const ProductsManagement = () => {

    const [products,setProducts]=useState([])

    const handleAddProducts=newProduct=>{
        const newProducts = [ ...products,newProduct]
        setProducts(newProducts)
    }


    return (
        <div>
            <ProductsForm handleAddProducts={handleAddProducts}></ProductsForm>
            <ProductsTable products={products}></ProductsTable>
        </div>
    );
};

export default ProductsManagement;