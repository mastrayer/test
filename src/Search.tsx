
      import React from 'react';

      const Search: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M20 14a6 6 0 11-12 0 6 6 0 0112 0zm-1.68 6.734a8 8 0 111.54-1.289l6.674 6.668a2 2 0 01-2.829.001l-5.385-5.38z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M20 14a6 6 0 11-12 0 6 6 0 0112 0zm-1.68 6.734a8 8 0 111.54-1.289l6.674 6.668a2 2 0 01-2.829.001l-5.385-5.38z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(Search));
    