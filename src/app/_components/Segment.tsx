import React from 'react';

interface SegmentProps {
  active: boolean;
  className: string;
}

const Segment: React.FC<SegmentProps> = ({ active, className }) => {
  return (
    <div
      className={`absolute bg-gray-400 rounded transition-opacity duration-300 ${
        active ? 'opacity-100 bg-white' : ' hidden'
      } ${className}`}
    ></div>
  );
};

export default Segment;
