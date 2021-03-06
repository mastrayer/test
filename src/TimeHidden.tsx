
      import React from 'react';

      const TimeHidden: React.ForwardRefRenderFunction<
        SVGSVGElement,
        JSX.IntrinsicElements['svg'] & {
          size?: 'L';
          type?: 'line'|'solid';
        }
      > = ({
        size = 'L',
        type = 'solid',
        ...props
      }, ref) => {
        
                if (size === 'L' && type === 'line') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M24 18a7.97 7.97 0 01-.743 3.372l1.486 1.486A9.955 9.955 0 0026 18c0-5.523-4.477-10-10-10-1.763 0-3.42.456-4.858 1.257l1.487 1.486A8 8 0 0124 18z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.257 11.671L6 9.414 7.414 8 25.8 26.385l-1.414 1.414-2.056-2.056A9.96 9.96 0 0116 28c-5.523 0-10-4.477-10-10 0-2.401.846-4.605 2.257-6.329zm1.423 1.423A8 8 0 0020.905 24.32L9.68 13.094z" fill="currentColor"/><path d="M20 4h-8v2h6a2 2 0 002-2z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M26 18c0 1.763-.456 3.42-1.257 4.858l-13.6-13.601A9.955 9.955 0 0116 8c5.523 0 10 4.477 10 10zM8.257 11.671L6 9.414 7.414 8 25.8 26.385l-1.414 1.414-2.056-2.056A9.959 9.959 0 0116 28c-5.523 0-10-4.477-10-10 0-2.401.846-4.605 2.257-6.329zM20 4h-8v2h6a2 2 0 002-2z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(TimeHidden));
    