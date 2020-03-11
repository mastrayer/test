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
        <path d="M7 16v12h7v-8h4v8h3a4 4 0 004-4v-8h3L16 4 4 16h3z" fill="currentColor" />
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
          d="M21 28a4 4 0 004-4v-8h3L16 4 4 16h3v12h14zm0-2h-3v-6h-4v6H9V14h-.172L16 6.828 23.172 14H23v10a2 2 0 01-2 2z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return null;
});
