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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 6h8.586c1.17 0 2.293.465 3.121 1.293A2.414 2.414 0 0020.414 8H27v12h-6.586a4.414 4.414 0 01-3.121-1.293A2.414 2.414 0 0015.586 18H9v10H7V6zm2 10h6.586c1.17 0 2.293.465 3.121 1.293a2.414 2.414 0 001.707.707H25v-8h-4.586a4.414 4.414 0 01-3.121-1.293A2.414 2.414 0 0015.586 8H9v8z"
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
          d="M15.586 6H7v22h2V18h6.586c.64 0 1.254.254 1.707.707A4.414 4.414 0 0020.414 20H27V8h-6.586c-.64 0-1.254-.254-1.707-.707A4.414 4.414 0 0015.586 6z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return null;
});
