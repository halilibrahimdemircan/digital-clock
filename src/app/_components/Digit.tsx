import React from 'react';
import Segment from './Segment';

interface DigitProps {
  value: string;
}

const segmentConfig: Record<string, string[]> = {
  '0': ['a', 'b', 'c', 'd', 'e', 'f'],
  '1': ['b', 'c'],
  '2': ['a', 'b', 'g', 'e', 'd'],
  '3': ['a', 'b', 'g', 'c', 'd'],
  '4': ['f', 'g', 'b', 'c'],
  '5': ['a', 'f', 'g', 'c', 'd'],
  '6': ['a', 'f', 'g', 'e', 'd', 'c'],
  '7': ['a', 'b', 'c'],
  '8': ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  '9': ['a', 'b', 'c', 'd', 'f', 'g'],
};

const Digit: React.FC<DigitProps> = ({ value }) => {
  const activeSegments = segmentConfig[value] || [];
  return (
    <div className="relative w-10 h-20 m-1">
      <Segment className="a top-0 left-1/2 -translate-x-1/2 w-8 h-2" active={activeSegments.includes('a')} />
      <Segment className="b top-0 right-0 w-2 h-8" active={activeSegments.includes('b')} />
      <Segment className="c bottom-0 right-0 w-2 h-8" active={activeSegments.includes('c')} />
      <Segment className="d bottom-0 left-1/2 -translate-x-1/2 w-8 h-2" active={activeSegments.includes('d')} />
      <Segment className="e bottom-0 left-0 w-2 h-8" active={activeSegments.includes('e')} />
      <Segment className="f top-0 left-0 w-2 h-8" active={activeSegments.includes('f')} />
      <Segment className="g top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-2" active={activeSegments.includes('g')} />
    </div>
  );
};

export default Digit;
