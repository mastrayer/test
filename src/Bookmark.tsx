
      import React from 'react';

      const Bookmark: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M16 22.17L24 28V8a4 4 0 00-4-4H8v24l8-5.83zm-6 1.898l6-4.373 6 4.373V8a2 2 0 00-2-2H10v18.068z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M8 4h12a4 4 0 014 4v20l-8-5.83L8 28V4z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(Bookmark));
    