import React, { useState } from 'react';

function AddProductForm({ onAddProduct }) {
  const [product, setProduct] = useState({
    pic: '',
    name: '',
    rate: '',
    discount: '',
    quantity: '',
    category: '',
    buylist: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    onAddProduct(product);
    setProduct({
      pic: '',
      name: '',
      rate: '',
      discount: '',
      quantity: '',
      category: '',
      buylist: '',
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct(prevProduct => ({ ...prevProduct, [name]: value }));
  }

  return (
    <div className='addProdect'>
    <form onSubmit={handleSubmit}>
      <label>
        Pic:
        <input type="text" name="pic" value={product.pic} onChange={handleChange} />
      </label>
      <label>
        Name:
        <input type="text" name="name" value={product.name} onChange={handleChange} />
      </label>
      <label>
        Rate:
        <input type="number" name="rate" value={product.rate} onChange={handleChange} />
      </label>
      <label>
        Discount:
        <input type="number" name="discount" value={product.discount} onChange={handleChange} />
      </label>
      <label>
        Quantity:
        <input type="number" name="quantity" value={product.quantity} onChange={handleChange} />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={product.category} onChange={handleChange} />
      </label>
      <button type="submit">Add Product</button>
    </form>
    </div>
  );
}

function ProductList() {
  const [products, setProducts] = useState([]);

  function handleAddProduct(newProduct) {
    setProducts(prevProducts => [...prevProducts, newProduct]);
  }

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.name}>
            <img src={product.pic} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Rate: {product.rate}</p>
            <p>Discount: {product.discount}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Category: {product.category}</p>
            
          </li>
        ))}
      </ul>
      <AddProductForm onAddProduct={handleAddProduct} />
    </div>
  );
}

export default ProductList;
