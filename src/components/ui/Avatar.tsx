import React from 'react';
import Image from 'next/image';
import { AvatarProps } from '@/types';

const Avatar: React.FC<AvatarProps> = ({ 
  name, 
  src, 
  size = 'md',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
  };

  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      className={`
        ${sizeClasses[size]}
        rounded-full
        text-white
        flex
        items-center
        justify-center
        font-semibold
        overflow-hidden
        transition-transform
        hover:scale-105
        relative
        ${className}
      `}
      style={{ backgroundColor: '#026892' }}
    >
      {src ? (
        <Image
          src={src}
          alt={name}
          fill
          sizes="48px"
          className="object-cover"
          unoptimized
        />
      ) : (
        <span>{getInitials(name)}</span>
      )}
    </div>
  );
};

export default Avatar;


