
      import React from 'react';

      const Password: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M24.486 17a6.002 6.002 0 01-7.72.648l-2.18 2.18-2.829 2.829-3.535 3.535a2 2 0 010-2.828l7.13-7.13a6.002 6.002 0 019.134-7.72 6 6 0 010 8.486zm-7.071-1.414a4 4 0 105.657-5.657 4 4 0 00-5.657 5.657z" fill="currentColor"/><path d="M11.758 22.657l-1.415 1.414 1.415 1.414 1.414-1.414-1.415-1.415zm2.828-2.829L16 21.242l-1.414 1.415-1.414-1.415 1.414-1.414z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M24.486 17a6.002 6.002 0 01-7.72.648l-2.18 2.18-2.829 2.829-3.535 3.535a2 2 0 010-2.828l7.13-7.13a6.002 6.002 0 019.134-7.72 6 6 0 010 8.486zm-7.071-1.414a4 4 0 105.657-5.657 4 4 0 00-5.657 5.657z" fill="currentColor"/><path d="M11.758 22.657l-1.415 1.414 1.415 1.414 1.414-1.414-1.415-1.415zm2.828-2.829L16 21.242l-1.414 1.415-1.414-1.415 1.414-1.414z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(Password));
    