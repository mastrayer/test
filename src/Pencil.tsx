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
          d="M6.1 26.9l.708-4.95L19.12 9.636l4.243 4.243L11.05 26.192 6.1 26.9zm19.678-15.435l-1 1-4.242-4.243 3.828-3.829 1.414 1.415a4 4 0 010 5.656z"
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
          d="M23.414 11l.95-.95a2 2 0 000-2.828L22 9.586 23.414 11zm-2.828 0L22 12.414 10.107 24.307l-1.65.235.236-1.65L20.586 11zm3.778-6.607l1.414 1.415a4 4 0 010 5.656L11.05 26.192 6.1 26.9l.708-4.95L24.364 4.394z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return null;
});
