
      import React from 'react';

      const Logout: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M17 4h-2v10a2 2 0 002-2V4z" fill="currentColor"/><path d="M25 17a9 9 0 11-13-8.064V6.75C7.903 8.35 5 12.336 5 17c0 6.075 4.925 11 11 11s11-4.925 11-11c0-4.664-2.903-8.65-7-10.25v2.186A9 9 0 0125 17z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M17 4h-2v10a2 2 0 002-2V4z" fill="currentColor"/><path d="M25 17a9 9 0 11-13-8.064V6.75C7.903 8.35 5 12.336 5 17c0 6.075 4.925 11 11 11s11-4.925 11-11c0-4.664-2.903-8.65-7-10.25v2.186A9 9 0 0125 17z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(Logout));
    