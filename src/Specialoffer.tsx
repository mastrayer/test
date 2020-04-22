
      import React from 'react';

      const SpecialOffer: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M17.347 14.146L16 10l-1.347 4.146h-4.36l3.527 2.562-1.347 4.146L16 18.292l3.527 2.562-1.347-4.146 3.526-2.562h-4.359z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26 24V4H6v24h16a4 4 0 004-4zM8 6h16v18a2 2 0 01-2 2H8V6z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M6 4h20v20a4 4 0 01-4 4H6V4zm11.347 10.146L16 10l-1.347 4.146h-4.36l3.527 2.562-1.347 4.146L16 18.292l3.527 2.562-1.347-4.146 3.526-2.562h-4.359z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(SpecialOffer));
    