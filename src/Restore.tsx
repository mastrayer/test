
      import React from 'react';

      const Restore: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M13 5l-1 1H7v2h18V6h-5l-1-1h-6zm5.207 14.518L17 18.31V23h-2v-4.69l-1.207 1.207-1.414-1.414L16 14.482l3.621 3.622-1.414 1.414z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 10v14a4 4 0 01-4 4H8V10h16zm-2 14V12H10v14h10a2 2 0 002-2z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M13 5l-1 1H7v2h18V6h-5l-1-1h-6z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 10H8v18h12a4 4 0 004-4V10zm-5.793 9.518L17 18.31V23h-2v-4.69l-1.207 1.208-1.414-1.414L16 14.482l3.621 3.622-1.414 1.414z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(Restore));
    