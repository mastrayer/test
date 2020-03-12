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
          d="M18 6a2 2 0 012-2v24h-2V6zM14 12a2 2 0 00-2 2v14h2V12zM8 20a2 2 0 00-2 2v6h2v-8zM26 16a2 2 0 00-2 2v10h2V16z"
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
          d="M18 7a3 3 0 013-3v24h-3V7zM15 12a3 3 0 00-3 3v13h3V12zM9 20a3 3 0 00-3 3v5h3v-8zM27 16a3 3 0 00-3 3v9h3V16z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return null;
});
