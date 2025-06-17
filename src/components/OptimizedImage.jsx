import React from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  loading = "lazy",
  width,
  height,
  sizes,
  priority = false,
  ...props 
}) => {
  // Convert regular images to WebP if supported
  const getOptimizedSrc = (originalSrc) => {
    if (originalSrc.endsWith('.jpg') || originalSrc.endsWith('.jpeg') || originalSrc.endsWith('.png')) {
      const baseName = originalSrc.substring(0, originalSrc.lastIndexOf('.'));
      return baseName + '.webp';
    }
    return originalSrc;
  };

  const handleError = (e) => {
    // Fallback to original format if WebP fails
    if (e.target.src.endsWith('.webp')) {
      e.target.src = src;
    }
  };

  return (
    <img
      src={getOptimizedSrc(src)}
      alt={alt}
      className={className}
      loading={priority ? "eager" : loading}
      width={width}
      height={height}
      sizes={sizes}
      onError={handleError}
      {...props}
    />
  );
};

export default OptimizedImage;
