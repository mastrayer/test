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
          d="M11.027 4h9.946L28 11.027v9.946L20.973 28h-9.946L4 20.973v-9.946L11.027 4zM16 20a1 1 0 110 2 1 1 0 010-2zm1-2v-8h-2v8h2z"
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
        <path d="M16 20a1 1 0 110 2 1 1 0 010-2zM17 18v-8h-2v8h2z" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.027 4h9.946L28 11.027v9.946L20.973 28h-9.946L4 20.973v-9.946L11.027 4zM6 11.855L11.855 6h8.29L26 11.855v8.29L20.145 26h-8.29L6 20.145v-8.29z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return null;
});
