import React from 'react';

export default React.forwardRef<SVGSVGElement, JSX.IntrinsicElements['svg']>(({ ...props }, ref) => (
  <svg width="1000" height="2" viewBox="0 0 1000 2" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
    <line y1="0.5" x2="1000" y2="1.5" stroke="#F4F4F4" />
  </svg>
));
