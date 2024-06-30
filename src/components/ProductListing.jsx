// ProductListing.jsx

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ShimmerCard from './ShimmerCard ';
const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offline, setOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setProducts(data);
        setOffline(false);
        setLoading(false);
        localStorage.setItem('products', JSON.stringify(data));
      } catch (error) {
        console.error('Error fetching products:', error);
        const cachedProducts = localStorage.getItem('products');
        if (cachedProducts) {
          setProducts(JSON.parse(cachedProducts));
        }
        setOffline(true);
        setLoading(false);
      }
    };

    if (navigator.onLine) {
      fetchProducts();
    } else {
      const cachedProducts = localStorage.getItem('products');
      if (cachedProducts) {
        setProducts(JSON.parse(cachedProducts));
        setLoading(false);
      }
      setOffline(true);
    }

    const handleOnline = () => {
      setOffline(false);
      fetchProducts();
    };
    const handleOffline = () => setOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 pb-16">
      {offline && <p>You are currently offline. Showing cached data.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {loading ? (
          Array(8).fill('').map((_, index) => <ShimmerCard key={index} />)
        ) : (
          products.map(product => <ProductCard key={product.id} product={product} />)
        )}
      </div>
    </div>
  );
};

export default ProductListing;
