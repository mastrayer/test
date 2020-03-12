import React from 'react';

export default React.forwardRef<
  SVGSVGElement,
  JSX.IntrinsicElements['svg'] & {
    size: 'S' | 'L';
    type: 'solid' | 'line';
  }
>(({ size = 'L', type = 'solid', ...props }, ref) => {
  if (type === 'solid') {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path d="M6 8h20a2 2 0 01-2 2H6V8zM6 22h20a2 2 0 01-2 2H6v-2zM26 15H6v2h18a2 2 0 002-2z" fill="currentColor" />
      </svg>
    );
  } else if (type === 'line') {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path d="M6 8h20a2 2 0 01-2 2H6V8zM6 22h20a2 2 0 01-2 2H6v-2zM26 15H6v2h18a2 2 0 002-2z" fill="currentColor" />
      </svg>
    );
  }
  return null;
});
