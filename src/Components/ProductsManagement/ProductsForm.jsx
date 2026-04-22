import React from 'react';

const ProductsForm = () => {

    const handleProducts = e=>{
        e.preventDefault()
        const name = e.target.products.value;
        const price = e.target.price.value;
        const quantity=e.target.quantity.value;

        // console.log(products,price,quantity);

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
        </div>
    );
};

export default ProductsForm;