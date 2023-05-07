import React from 'react';

type ArrowProps = {
  direction: 'up' | 'down';
  color?: string;
  className?: string;
};

const ArrowUpIcon = ({
  direction,
  color = 'currentColor',
  className,
}: ArrowProps) => {
  const points = direction === 'up' ? '5,0 0,5 10,5' : '0,0 10,0 5,5';
  return (
    <svg
      width="10"
      height="5"
      viewBox="0 0 10 5"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <polygon points={points} fill={color} />
    </svg>
  );
};

export default ArrowUpIcon;
