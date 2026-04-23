import React, { useState } from 'react';

const ProductsForm = ({handleAddProducts}) => {
    const [error,setError]=useState('')

    const handleProducts = e=>{
        e.preventDefault()
        const name = e.target.products.value;
        const price = e.target.price.value;
        const quantity=e.target.quantity.value;

        // console.log(products,price,quantity);

        if(name.length ===0){
            setError("please provide a product a naem")
            return;
        }else if(price.length ===0){
            setError("please provide a price")
            return;
        }else if(price <0){
            setError("peice can be negative")
            return;
        }
        else if(quantity.length ===0){
            setError("please provide a quantity")
            return;
        }else if (quantity <0){
            setError("quantity can be negative")
            return
        }else{
            setError('')
        }


        const newProduct = {
            name,
            price,
            quantity
        }
        // console.log(newProducts);
        handleAddProducts (newProduct)

    }



    return (
        <div>
            <h2>added Products</h2>
            <form onSubmit={handleProducts}>
                <input type="text" name='products' placeholder='Products'  /> <br />
                <input type="text" name='price' placeholder='Price'/><br />
                <input type="text" name='quantity' placeholder='Quantity'  /> <br />
                <input type="submit" value="submit" />
            </form>
            <p style={{color:"red"}}><small>{error}</small></p>
        </div>
    );
};

export default ProductsForm;