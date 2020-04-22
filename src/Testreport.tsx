
      import React from 'react';

      const Testreport: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M24 18l2-2V4H6v24h14l-2-2H8V6h16v12z" fill="currentColor"/><path d="M10 10h12v2H10v-2zm12 6H10v2h12v-2zm7.326 3.973l-6.364 6.364-3.537-3.535 1.415-1.415 2.121 2.122 4.95-4.95 1.415 1.414z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M6 4v24h16.91L18 23.5l4.5-4.5 2 2 1.5-1.5V4H6zm16 5H10v2h12V9zm-12 6h12v2H10v-2z" fill="currentColor"/><path d="M24.536 26.778l6.364-6.364L29.486 19l-4.95 4.95-2.122-2.122L21 23.243l3.536 3.535z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(Testreport));
    