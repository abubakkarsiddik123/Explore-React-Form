import React from "react";

const ProductsTable = ({ products }) => {
  return (
    <div>
      <h3>prodects:{products.length} </h3>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product,index) => (
            <tr key={index}>
              <td>{index +1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;

