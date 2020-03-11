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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 4H6v20a4 4 0 004 4h16v-2H10a2 2 0 01-2-2V6h16v4h2V4z"
        fill="currentColor"
      />
      <path d="M26 16.4h-9a2 2 0 002 2h7v-2z" fill="currentColor" />
      <path d="M26.586 15.935l-4.95 4.95 1.415 1.414 4.95-4.95-1.415-1.414z" fill="currentColor" />
      <path d="M26.586 18.764l-4.95-4.95 1.415-1.414L28 17.349l-1.415 1.415z" fill="currentColor" />
    </svg>
  );

  return null;
});
