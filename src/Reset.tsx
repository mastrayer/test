
      import React from 'react';

      const Reset: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M24 16a8 8 0 01-14.93 4H6.832c1.543 3.532 5.067 6 9.168 6 5.523 0 10-4.477 10-10S21.523 6 16 6c-2.55 0-4.878.955-6.645 2.527L7.622 6.793l-1.794 6.692 6.693-1.793-1.748-1.748A8 8 0 0124 16z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M24 16a8 8 0 01-14.93 4H6.832c1.543 3.532 5.067 6 9.168 6 5.523 0 10-4.477 10-10S21.523 6 16 6c-2.55 0-4.878.955-6.645 2.527L7.622 6.793l-1.794 6.692 6.693-1.793-1.748-1.748A8 8 0 0124 16z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(Reset));
    