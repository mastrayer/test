
      import React from 'react';

      const TextFields: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M6 4v6h2V6h16v18a2 2 0 01-2 2H6v2h16a4 4 0 004-4V4H6z" fill="currentColor"/><path d="M6 14a2 2 0 002 2h.5v6h2v-6h2v-2H6z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M6 4v6h2V6h16v18a2 2 0 01-2 2H6v2h16a4 4 0 004-4V4H6z" fill="currentColor"/><path d="M6 14a2 2 0 002 2h.5v6h2v-6h2v-2H6z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(TextFields));
    