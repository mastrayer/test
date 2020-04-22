
      import React from 'react';

      const Close: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M25.192 8.222l-1.414-1.414L16 14.586 8.222 6.808 6.808 8.222 14.586 16l-7.778 7.778 1.414 1.414L16 17.414l7.778 7.778 1.414-1.414L17.414 16l7.778-7.778z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M25.192 8.222l-1.414-1.414L16 14.586 8.222 6.808 6.808 8.222 14.586 16l-7.778 7.778 1.414 1.414L16 17.414l7.778 7.778 1.414-1.414L17.414 16l7.778-7.778z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(Close));
    