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
        <path d="M12 16.071L19.071 9l1.414 1.414-5.657 5.657 5.657 5.657-1.414 1.414L12 16.071z" fill="currentColor" />
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
        <path d="M12 16.071L19.071 9l1.414 1.414-5.657 5.657 5.657 5.657-1.414 1.414L12 16.071z" fill="currentColor" />
      </svg>
    );
  }
  return null;
});
