import React from 'react';
import ContentLoader from 'react-content-loader';

const ShimmerProductDetail = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
        <div className="md:w-1/2 max-w-md mx-auto flex items-center">
          <ContentLoader
            speed={2}
            width={400}
            height={400}
            viewBox="0 0 400 400"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="5" ry="5" width="400" height="400" />
          </ContentLoader>
        </div>
        <div className="md:w-1/2 p-6">
          <ContentLoader
            speed={2}
            width={500}
            height={400}
            viewBox="0 0 500 400"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="5" ry="5" width="300" height="30" />
            <rect x="0" y="50" rx="4" ry="4" width="100" height="20" />
            <rect x="0" y="80" rx="4" ry="4" width="150" height="20" />
            <rect x="0" y="120" rx="4" ry="4" width="400" height="20" />
            <rect x="0" y="150" rx="4" ry="4" width="400" height="20" />
            <rect x="0" y="180" rx="4" ry="4" width="400" height="20" />
            <rect x="0" y="210" rx="4" ry="4" width="200" height="20" />
            <rect x="0" y="250" rx="4" ry="4" width="400" height="20" />
            <rect x="0" y="280" rx="4" ry="4" width="400" height="20" />
            <rect x="0" y="310" rx="4" ry="4" width="150" height="20" />
            <rect x="0" y="340" rx="4" ry="4" width="100" height="20" />
          </ContentLoader>
        </div>
      </div>
    </div>
  );
};

export default ShimmerProductDetail;
