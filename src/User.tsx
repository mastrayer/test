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
          d="M16 16a5 5 0 100-10 5 5 0 000 10zM5 22.8C5 20.149 9.925 18 16 18s11 2.149 11 4.8V26H5v-3.2z"
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
          d="M21 11a5 5 0 11-10 0 5 5 0 0110 0zm-2 0a3 3 0 11-6 0 3 3 0 016 0zM16 18c6.075 0 11 2.149 11 4.8V26H5v-3.2C5 20.149 9.925 18 16 18zm-9 4.8c0-.013.001-.048.034-.118.036-.077.113-.2.267-.358.318-.329.876-.716 1.72-1.085C10.706 20.504 13.172 20 16 20c2.829 0 5.295.504 6.978 1.239.845.369 1.403.756 1.721 1.085.154.158.23.281.267.358.033.07.034.105.034.118V24H7v-1.2z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return null;
});
