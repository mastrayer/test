
      import React from 'react';

      const Paper: React.ForwardRefRenderFunction<
        SVGSVGElement,
        JSX.IntrinsicElements['svg'] & {
          size?: 'L'|'S';
          type?: 'line'|'solid';
        }
      > = ({
        size = 'L',
        type = 'solid',
        ...props
      }, ref) => {
        
                if (size === 'L' && type === 'line') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M22 10H10v2h12v-2zm-12 5h12v2H10v-2zm12 5H10v2h12v-2z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6 28V4h20v20a4 4 0 01-4 4H6zM8 6h16v18a2 2 0 01-2 2H8V6z" fill="currentColor"/></svg>);
                }
              

                if (size === 'S' && type === 'line') {
                  return (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M5 6h6v1H5V6zm6 3H5v1h6V9z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 2v12h8a2 2 0 002-2V2H3zm9 1H4v10h7a1 1 0 001-1V3z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M26 4H6v24h16a4 4 0 004-4V4zm-4 6H10v2h12v-2zm-12 5h12v2H10v-2zm12 5H10v2h12v-2z" fill="currentColor"/></svg>);
                }
              

                if (size === 'S' && type === 'solid') {
                  return (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M3 2v12h8a2 2 0 002-2V2H3zm2.093 4.033h6v1h-6v-1zM11.095 9h-6v1h6V9z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(Paper));
    