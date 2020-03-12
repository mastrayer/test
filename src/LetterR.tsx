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
          d="M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12zm-12.096-.55H14.32v-3.73h1.584c.792 0 1.391.132 1.798.396.418.254.627.71.627 1.37 0 .66-.209 1.155-.627 1.485-.407.319-1.006.479-1.798.479zm.115 1.93L18.527 22h2.723l-2.855-5c.704-.274 1.265-.698 1.683-1.27.43-.572.644-1.32.644-2.244 0-.704-.121-1.293-.363-1.766a2.886 2.886 0 00-.974-1.138 3.94 3.94 0 00-1.452-.61 8.52 8.52 0 00-1.798-.182h-4.257V22h2.442v-4.62h1.7z"
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
          d="M15.904 15.6H14.32v-3.73h1.584c.792 0 1.391.133 1.798.397.418.253.627.709.627 1.369s-.209 1.155-.627 1.485c-.407.319-1.006.479-1.798.479z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12zm.02-10.47l2.507 4.62h2.723l-2.855-5c.704-.274 1.265-.698 1.683-1.27.43-.572.644-1.32.644-2.244 0-.704-.121-1.292-.363-1.765a2.886 2.886 0 00-.974-1.139 3.94 3.94 0 00-1.452-.61 8.52 8.52 0 00-1.798-.182h-4.257v12.21h2.442v-4.62h1.7z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return null;
});
