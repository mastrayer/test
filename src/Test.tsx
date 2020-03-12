import React from 'react';

export default React.forwardRef<
  SVGSVGElement,
  JSX.IntrinsicElements['svg'] & {
    size: 'S' | 'L';
    type: 'solid' | 'line';
  }
>(({ size = 'L', type = 'solid', ...props }, ref) => {
  if (type === 'solid') {
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
            d="M25 4H5v24h6l1-2 13-13V4zm-4 6H9v2h12v-2zM9 16h11l-1.846 2H9v-2z"
            fill="currentColor"
          />
          <path
            d="M27.556 16.414L26.142 15 14.828 26.314l-1.414 4.242 4.243-1.414 9.9-9.9a2 2 0 000-2.828z"
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
            d="M12.5 2h-10v12h3l.5-1 6.5-6.5V2zm-2 3h-6v1h6V5zm-6 3H10l-.923 1H4.5V8z"
            fill="currentColor"
          />
          <path
            d="M13.778 8.207l-.707-.707-5.657 5.657-.707 2.121 2.121-.707 4.95-4.95a1 1 0 000-1.414z"
            fill="currentColor"
          />
        </svg>
      );
    }
  } else if (type === 'line') {
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
          <path d="M7 6h16v9l2-2V4H5v24h6l1-2H7V6z" fill="currentColor" />
          <path
            d="M21 10H9v2h12v-2zM9 16h12l-2 2H9v-2zM27.556 16.414L26.142 15 14.828 26.314l-1.414 4.242 4.243-1.414 9.9-9.9a2 2 0 000-2.828z"
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
          <path d="M3.5 3h8v4.5l1-1V2h-10v12h3l.5-1H3.5V3z" fill="currentColor" />
          <path
            d="M10.5 5h-6v1h6V5zM4.5 8h6l-1 1h-5V8zM13.778 8.207l-.707-.707-5.657 5.657-.707 2.121 2.121-.707 4.95-4.95a1 1 0 000-1.414z"
            fill="currentColor"
          />
          <path d="M3.5 3h8v4.5l1-1V2h-10v12h3l.5-1H3.5V3z" fill="currentColor" />
          <path
            d="M10.5 5h-6v1h6V5zM4.5 8h6l-1 1h-5V8zM13.778 8.207l-.707-.707-5.657 5.657-.707 2.121 2.121-.707 4.95-4.95a1 1 0 000-1.414z"
            fill="currentColor"
          />
        </svg>
      );
    }
  }
  return null;
});
