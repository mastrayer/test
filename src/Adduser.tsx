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
          d="M22 11a5 5 0 11-10 0 5 5 0 0110 0zm-2 0a3 3 0 11-6 0 3 3 0 016 0zM17 18c6.075 0 11 2.149 11 4.8V26H6v-3.2c0-2.651 4.925-4.8 11-4.8zm-9 4.8c0-.013.001-.048.034-.118.036-.077.113-.2.267-.358.318-.329.876-.716 1.72-1.085C11.706 20.504 14.172 20 17 20c2.829 0 5.295.504 6.978 1.239.845.369 1.403.756 1.721 1.085.154.158.23.281.267.358.033.07.034.105.034.118V24H8v-1.2z"
          fill="currentColor"
        />
        <path d="M6 12h2v2h2v2H8a2 2 0 01-2 2v-2H4v-2h2v-2z" fill="currentColor" />
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
          d="M22 11a5 5 0 11-10 0 5 5 0 0110 0zM17 18c-6.075 0-11 2.149-11 4.8V26h22v-3.2c0-2.651-4.925-4.8-11-4.8zM6 12h2v2h2v2H8a2 2 0 01-2 2v-2H4v-2h2v-2z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return null;
});
