import React from 'react';

export default React.forwardRef<
  SVGSVGElement,
  JSX.IntrinsicElements['svg'] & {
    size: 'S' | 'L';
    type: 'solid' | 'line';
  }
>(({ size = 'L', type = 'solid', ...props }, ref) => {
  if (type === 'line') {
    if (size === 'L') {
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
            d="M4 6h8c1.636 0 3.088.785 4 2a4.992 4.992 0 014-2h8v20h-9a1 1 0 00-1 1h-4a1 1 0 00-1-1H4V6zm22 2h-6a3 3 0 00-3 3v13.764A2.989 2.989 0 0119 24h7V8zM12 8H6v16h7c.768 0 1.47.289 2 .764V11a3 3 0 00-3-3z"
            fill="currentColor"
          />
        </svg>
      );
    } else if (size === 'S') {
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
          ref={ref}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 3h4c.818 0 1.544.393 2 1 .456-.607 1.182-1 2-1h4v10h-4a1 1 0 00-1 1H7a1 1 0 00-1-1H2V3zm6.5 9.677A1.995 1.995 0 0110 12h3V4h-3a1.5 1.5 0 00-1.5 1.5v7.177zM7.5 5.5v7.177A1.995 1.995 0 006 12H3V4h3a1.5 1.5 0 011.5 1.5z"
            fill="currentColor"
          />
        </svg>
      );
    }
  } else if (type === 'solid') {
    if (size === 'S') {
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
          ref={ref}
        >
          <path
            d="M2 3v10h4a1 1 0 011 1h2a1 1 0 011-1h4V3h-4c-.818 0-1.544.393-2 1a2.496 2.496 0 00-2-1H2z"
            fill="currentColor"
          />
        </svg>
      );
    } else if (size === 'L') {
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
            d="M4 6v20h9a1 1 0 011 1h4a1 1 0 011-1h9V6h-8a4.992 4.992 0 00-4 2 4.992 4.992 0 00-4-2H4z"
            fill="currentColor"
          />
        </svg>
      );
    }
  }
  return null;
});
