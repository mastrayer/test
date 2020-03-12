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
          d="M12 7a2 2 0 00-2-2v3H4v2h6v2h2v-2h16V8H12V7zM28 16h-4v-1a2 2 0 00-2-2v3H4v2h18v2h2v-2h4v-2zM10 24h18v2H10v2H8v-2H4v-2h4v-3a2 2 0 012 2v1z"
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
          d="M12 7a2 2 0 00-2-2v3H4v2h6v2h2v-2h16V8H12V7zM28 16h-4v-1a2 2 0 00-2-2v3H4v2h18v2h2v-2h4v-2zM10 24h18v2H10v2H8v-2H4v-2h4v-3a2 2 0 012 2v1z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return null;
});
