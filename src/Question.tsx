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
          d="M22.42 24.934A10.95 10.95 0 0116 27C9.925 27 5 22.075 5 16S9.925 5 16 5s11 4.925 11 11c0 2.96-1.169 5.646-3.07 7.623l2.556 2.839a2 2 0 01-2.824-.148l-1.243-1.38zm-1.484-1.648a8.8 8.8 0 111.517-1.304l-2.658-2.952-1.486 1.339 2.627 2.917z"
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
          d="M22.42 24.934A10.95 10.95 0 0116 27C9.925 27 5 22.075 5 16S9.925 5 16 5s11 4.925 11 11c0 2.96-1.169 5.646-3.07 7.623l2.556 2.839a2 2 0 01-2.824-.148l-1.243-1.38zm-1.484-1.648a8.8 8.8 0 111.517-1.304l-2.658-2.952-1.486 1.339 2.627 2.917z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return null;
});
