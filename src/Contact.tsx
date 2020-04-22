
      import React from 'react';

      const Contact: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M10 12H4v14l4-2h10a4 4 0 004-4v-2h2l4 2V6H10v6zm14.472 4H22v-4H12V8h14v8.764L24.472 16zM18 22H7.528L6 22.764V14h14v6a2 2 0 01-2 2z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M22 18h2l4 2V6H10v6H4v14l4-2h10a4 4 0 004-4v-2zm0-2h2.472l1.528.764V8H12v4h10v4z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(Contact));
    