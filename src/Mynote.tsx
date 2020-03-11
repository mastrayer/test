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
          d="M26 4v20a4 4 0 01-4 4H6V4h20zm-4.003 2H24v18a2 2 0 01-2 2H8V6h11.997v8a2 2 0 002-2V6z"
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
        <path d="M20 4H6v24h16a4 4 0 004-4V4h-4v9.967a2 2 0 01-2 2V4z" fill="currentColor" />
      </svg>
    );
  }
  return null;
});
