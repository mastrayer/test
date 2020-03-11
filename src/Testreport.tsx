import React from 'react';

export default React.forwardRef<
  SVGSVGElement,
  JSX.IntrinsicElements['svg'] & {
    size: 'S' | 'L';
    type: 'solid' | 'line';
  }
>(({ size = 'L', type = 'solid', ...props }, ref) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
      <path d="M24 18l2-2V4H6v24h14l-2-2H8V6h16v12z" fill="currentColor" />
      <path
        d="M10 10h12v2H10v-2zM22 16H10v2h12v-2zM29.326 19.973l-6.364 6.364-3.537-3.535 1.415-1.415 2.121 2.122 4.95-4.95 1.415 1.414z"
        fill="currentColor"
      />
    </svg>
  );

  return null;
});
