import React, { useState } from "react";

function AddProductForm({ onAddProduct }) {
  const [product, setProduct] = useState({
    id: "",
    pic: "",
    name: "",
    rate: "",
    discount: "",
    quantity: "",
    category: "",
    buylist: false
  });

  function handleSubmit(event) {
    event.preventDefault();
    onAddProduct(product);
    setProduct({
      id: "",
      pic: "",
      name: "",
      rate: "",
      discount: "",
      quantity: "",
      category: "",
      buylist: false
    });
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        id :
        <input
          type="number"
          name="id"
          value={product.id}
          onChange={handleChange}
        />
      </label>
      <label>
        Pic:
        <input
          type="text"
          name="pic"
          value={product.pic}
          onChange={handleChange}
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Rate:
        <input
          type="number"
          name="rate"
          value={product.rate}
          onChange={handleChange}
        />
      </label>
      <label>
        Discount:
        <input
          type="number"
          name="discount"
          value={product.discount}
          onChange={handleChange}
        />
      </label>
      <label>
        Quantity:
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
        />
      </label>
      <label>
        Buy List:
        <input
          type="checkbox"
          name="buylist"
          checked={product.buylist}
          onChange={handleChange}
        />
      </label>
      <button type="submit">
        {product.id ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
}

function ProductList() {
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);

  function handleAddProduct(newProduct) {
    if (editingProductId !== null) {
      // Update existing product
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === editingProductId
            ? { ...newProduct, id: editingProductId }
            : product
        )
      );
      setEditingProductId(null);
    } else {
      // Add new product
      setProducts((prevProducts) => [
        ...prevProducts,
        { ...newProduct, id: Date.now() }
      ]);
    }
  }

  function handleEditProduct(id) {
    const product = products.find((product) => product.id === id);
    setEditingProductId(id);
    setProduct(product);
  }

  function handleDeleteProduct(id) {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  }

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.pic} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Rate: {product.rate}</p>
            <p>Discount: {product.discount}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Category: {product.category}</p>
            <p>Buy List: {product.buylist ? "Yes" : "No"}</p>
            <button onClick={handleEditProduct(product.id)}>Edit</button>
            <button onClick={handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <AddProductForm onAddProduct={handleAddProduct} />
    </div>
  );
}

export default ProductList;
