import React from 'react';

export default React.forwardRef<SVGSVGElement, JSX.IntrinsicElements['svg']>(({ ...props }, ref) => (
  <svg width="1000" height="1" viewBox="0 0 1000 1" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
    <path fillRule="evenodd" clipRule="evenodd" d="M1000 1H0V0H1000V1Z" fill="#202020" />
  </svg>
));
