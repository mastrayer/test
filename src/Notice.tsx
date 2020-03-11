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
          d="M18 4h-4v2.29c-2.892.86-5 3.539-5 6.71v1.86a4 4 0 01-1.781 3.328l-1.212.808H6V23h20v-4.004h-.007l-1.212-.808A4 4 0 0123 14.858V13a7.003 7.003 0 00-5-6.71V4zM18 25h-4v4a4 4 0 004-4z"
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 4h-4v2.29c-2.892.86-5 3.539-5 6.71v1.86c0 1.337-.668 3.586-1.781 4.328L6 20v3h20v-3l-1.219-.813C23.668 18.447 23 16.197 23 14.86V13a7.003 7.003 0 00-5-6.71V4zm3 9a5 5 0 00-10 0v1.86c0 2.005-1.003 4.879-2.672 5.992L8.106 21h15.788l-.222-.148C22.002 19.739 21 16.865 21 14.859V13z"
          fill="currentColor"
        />
        <path d="M18 25a4 4 0 01-4 4v-4h4z" fill="currentColor" />
      </svg>
    );
  }
  return null;
});
