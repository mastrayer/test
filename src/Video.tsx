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
        <path d="M24 8H4v16h16.667C22.507 24 24 22.294 24 20.19V19l4 3V10l-4 3.75V8z" fill="currentColor" />
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
          d="M6 10h16v10.19c0 1.26-.84 1.81-1.333 1.81H6V10zM4 8h20v5.75L28 10v12l-4-3v1.19c0 2.104-1.492 3.81-3.333 3.81H4V8z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return null;
});
