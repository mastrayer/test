import React from 'react';

export default React.forwardRef<
  SVGSVGElement,
  JSX.IntrinsicElements['svg'] & {
    size: 'S' | 'L';
    type: 'solid' | 'line';
  }
>(({ size = 'L', type = 'solid', ...props }, ref) => {
  if (type === 'line') {
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
          d="M25.942 10.245L13.02 23.169l-6.961-6.96 1.414-1.415 5.547 5.547L24.528 8.831l1.414 1.415z"
          fill="currentColor"
        />
      </svg>
    );
  } else if (type === 'solid') {
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
          d="M25.942 10.245L13.02 23.169l-6.961-6.96 1.414-1.415 5.547 5.547L24.528 8.831l1.414 1.415z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return null;
});
