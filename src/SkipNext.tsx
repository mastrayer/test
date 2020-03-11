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
          d="M18.128 17.248a1.5 1.5 0 000-2.496L8 8v16l10.128-6.752zM24 8a3 3 0 00-3 3v13h3V8z"
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
          d="M18.128 17.248a1.5 1.5 0 000-2.496L8 8v16l10.128-6.752zM24 8a3 3 0 00-3 3v13h3V8z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return null;
});
