
      import React from 'react';

      const Cart: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M8.181 6H2a2 2 0 002 2h2.542l.75 3.749L9 22h14a4 4 0 004-4v-8H8.981l-.8-4zm2.513 14l-1.333-8H25v6a2 2 0 01-2 2H10.694z" fill="currentColor"/><path d="M15 26a2 2 0 11-4 0 2 2 0 014 0zm7 2a2 2 0 100-4 2 2 0 000 4z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M8.181 6H2a2 2 0 002 2h2.542l.75 3.749L9 22h14a4 4 0 004-4v-8H8.981l-.8-4zM15 27a2 2 0 11-4 0 2 2 0 014 0zm7 2a2 2 0 100-4 2 2 0 000 4z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(Cart));
    