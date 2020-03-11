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
        <path d="M20 4h-8v2h6a2 2 0 002-2z" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 28c5.523 0 10-4.477 10-10S21.523 8 16 8 6 12.477 6 18s4.477 10 10 10zm1-15.75v5.586l3.707 3.707a2 2 0 01-2.828 0L15 18.664V12.25h2z"
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
        <path d="M17 12h-2v6.414l2.879 2.879a2 2 0 002.828 0L17 17.586V12z" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 28c5.523 0 10-4.477 10-10S21.523 8 16 8 6 12.477 6 18s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"
          fill="currentColor"
        />
        <path d="M12 4h8a2 2 0 01-2 2h-6V4z" fill="currentColor" />
      </svg>
    );
  }
  return null;
});
