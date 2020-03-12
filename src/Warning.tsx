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
        <path d="M16 20a1 1 0 110 2 1 1 0 010-2zM17 18v-6h-2v6h2z" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 26L16 2l13 24H3zm3.358-2L16 6.2 25.642 24H6.358z"
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29 26L16 2 3 26h26zm-13-6a1 1 0 110 2 1 1 0 010-2zm1-2v-6h-2v6h2z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return null;
});
