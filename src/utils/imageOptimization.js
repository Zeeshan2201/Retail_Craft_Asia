// Image optimization utility for better SEO performance
export const optimizeImageUrl = (src, options = {}) => {
  const { width, height, quality = 80, format = 'webp' } = options;
  
  // For static images, you could implement a CDN transformation
  // This is a placeholder for image optimization logic
  if (src.includes('localhost') || src.includes('127.0.0.1')) {
    return src; // Development mode, return original
  }
  
  // In production, you might use a service like Cloudinary, ImageKit, etc.
  // Example: return `https://your-cdn.com/transform/w_${width},h_${height},q_${quality},f_${format}/${src}`;
  
  return src;
};

// Generate responsive image srcSet
export const generateSrcSet = (baseSrc, sizes = [480, 768, 1024, 1200]) => {
  return sizes.map(size => `${optimizeImageUrl(baseSrc, { width: size })} ${size}w`).join(', ');
};

// Common image sizes for responsive design
export const imageSizes = {
  mobile: '(max-width: 768px) 100vw',
  tablet: '(max-width: 1024px) 50vw',
  desktop: '33vw'
};

// SEO-friendly alt text generator
export const generateAltText = (imageName, context = '') => {
  const cleanName = imageName
    .replace(/\.(jpg|jpeg|png|webp|svg)$/i, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
  
  return context ? `${cleanName} - ${context}` : cleanName;
};
