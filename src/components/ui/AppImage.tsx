import Image from 'next/image';
import React from 'react';

interface AppImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
}

const AppImage: React.FC<AppImageProps> = ({ src, alt, fill = false, sizes, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      className={className}
      style={{ objectFit: 'cover' }}
    />
  );
};

export default AppImage;