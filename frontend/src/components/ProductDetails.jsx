import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // Fetch product details
    axios.get(`http://localhost:8080/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
        // Fetch related products based on category
        return axios.get(`http://localhost:8080/api/products/related/${response.data.categoryId}`);
      })
      .then(response => {
        setRelatedProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  const handleQuantityChange = (e) => {
    setQuantity(Math.max(1, parseInt(e.target.value)));
  };

  const addToCart = () => {
    // Implement add to cart functionality
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  return (
    <div className="product-details">
      <div className="product-main">
        <div className="product-images">
          <div className="main-image">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
            />
          </div>
          <div className="thumbnail-images">
            {product.images.map((image, index) => (
              <img 
                key={index}
                src={image}
                alt={`${product.name} thumbnail ${index + 1}`}
                className={selectedImage === index ? 'selected' : ''}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <div className="product-price">${product.price}</div>
          <div className="product-rating">
            {/* Add star rating component here */}
            <span>★★★★☆</span>
            <span className="review-count">(32 reviews)</span>
          </div>
          
          <div className="product-description">
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>

          <div className="product-options">
            <div className="quantity-selector">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
              />
            </div>
            
            <button className="add-to-cart-btn" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="product-details-tabs">
        <div className="tabs">
          <h2>Specifications</h2>
          <div className="specifications">
            <table>
              <tbody>
                {Object.entries(product.specifications || {}).map(([key, value]) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="related-products">
        <h2>Related Products</h2>
        <div className="related-products-grid">
          {relatedProducts.map(relatedProduct => (
            <div key={relatedProduct.id} className="related-product-card">
              <img src={relatedProduct.images[0]} alt={relatedProduct.name} />
              <h3>{relatedProduct.name}</h3>
              <p className="price">${relatedProduct.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;