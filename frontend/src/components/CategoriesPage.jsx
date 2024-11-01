import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CategoriesPage.css';

function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div className="categories-page">
      <header className="categories-header">
        <h1>Explore Our Furniture Categories</h1>
        <p>Find the perfect pieces for every room in your home</p>
      </header>

      <div className="categories-grid">
        {categories.map(category => (
          <div key={category.id} className="category-card">
            <div className="category-image">
              <img src={category.imageUrl} alt={category.name} />
            </div>
            <div className="category-info">
              <h2>{category.name}</h2>
              <p>{category.description}</p>
              <button className="explore-btn">Explore {category.name}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;