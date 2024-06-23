// ProductListing.jsx

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
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
      } catch (error) {
        console.error('Error fetching products:', error);
        setOffline(true); // Set offline mode if fetch fails
        // Attempt to fetch from cache
        const cacheResponse = await caches.match('https://fakestoreapi.com/products');
        if (cacheResponse) {
          const cacheData = await cacheResponse.json();
          setProducts(cacheData);
        } else {
          console.error('Error fetching cached products.');
        }
      }
    };

    fetchProducts();

    // Listen for network status changes
    const handleOnline = () => setOffline(false);
    const handleOffline = () => setOffline(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="container mx-auto px-4">
      {offline && <p>You are currently offline. Showing cached data.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
