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
          d="M16 16V6.189l-7 3.11V16h7v9.811l2.25-1a8 8 0 004.75-7.31V16h-7zm0 12l3.061-1.36A10 10 0 0025 17.5V8l-9-4-9 4v9.501a10 10 0 005.939 9.138L16 28z"
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
          d="M16 28l3.061-1.36A10 10 0 0025 17.5V8l-9-4-9 4v9.501a10 10 0 005.939 9.138L16 28zm7-18.7l-6-2.667V15h6V9.3zm0 7.7h-6v8.367l1.25-.555a8 8 0 004.75-7.31V17zm-8-2V6.633L9 9.3V15h6zm-6 2h6v8.367l-1.25-.555A8 8 0 019 17.502V17z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return null;
});
