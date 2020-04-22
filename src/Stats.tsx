
      import React from 'react';

      const Stats: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M18 6a2 2 0 012-2v24h-2V6zm-4 6a2 2 0 00-2 2v14h2V12zm-6 8a2 2 0 00-2 2v6h2v-8zm18-4a2 2 0 00-2 2v10h2V16z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M18 7a3 3 0 013-3v24h-3V7zm-3 5a3 3 0 00-3 3v13h3V12zm-6 8a3 3 0 00-3 3v5h3v-8zm18-4a3 3 0 00-3 3v9h3V16z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(Stats));
    