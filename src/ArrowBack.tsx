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
        <path
          d="M5 16l7.071-7.07 1.414 1.414L8.83 15H27a2 2 0 01-2 2H8.829l4.656 4.656-1.414 1.415L5 16z"
          fill="currentColor"
        />
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
        <path
          d="M5 16l7.071-7.07 1.414 1.414L8.83 15H27a2 2 0 01-2 2H8.83l4.655 4.656-1.414 1.415L5 16z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return null;
});
