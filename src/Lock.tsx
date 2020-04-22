
      import React from 'react';

      const Lock: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M22 15h2v9a4 4 0 01-4 4H8V15h2V8.616C10 5.537 12.661 3 16 3s6 2.537 6 5.616V15zm-6-9.998c-2.084 0-3.818 1.595-3.818 3.614V15h7.636V8.616c0-2.02-1.734-3.614-3.818-3.614zM20 26a2 2 0 002-2v-7H10v9h10z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M12.182 9.616c0-2.02 1.734-3.614 3.818-3.614s3.818 1.595 3.818 3.614V16H22V9.616C22 6.537 19.339 4 16 4s-6 2.537-6 5.616V16h2.182V9.616zM24 24v-8H8v12h12a4 4 0 004-4z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(Lock));
    