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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 5l-1 1H7v2h18V6h-5l-1-1h-6zm-5 5h16v14a4 4 0 01-4 4H8V10z"
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 5l-1 1H7v2h18V6h-5l-1-1h-6zm11 5v14a4 4 0 01-4 4H8V10h16zm-2 14V12H10v14h10a2 2 0 002-2z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return null;
});
