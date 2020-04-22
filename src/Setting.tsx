
      import React from 'react';

      const Setting: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M18 4h-4v4.252c-.735.19-1.43.48-2.067.857L8.931 6.103l-2.83 2.826 3.005 3.01a7.951 7.951 0 00-.855 2.064L4.003 14 4 18l4.253.003c.189.733.479 1.425.855 2.061l-3.012 3.012 2.828 2.828 3.012-3.012c.637.377 1.33.667 2.064.856V28h4v-4.252a7.952 7.952 0 002.052-.848l3.005 3.01 2.83-2.827-3.002-3.007c.377-.636.67-1.329.86-2.062l4.252.003.003-4-4.248-.003a7.952 7.952 0 00-.86-2.078l3-3-2.828-2.828-3 3A7.953 7.953 0 0018 8.252V4zm-2 16a4 4 0 100-8 4 4 0 000 8z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M18 4h-4v4.252c-.735.19-1.43.48-2.067.857L8.931 6.103l-2.83 2.826 3.005 3.01a7.951 7.951 0 00-.855 2.064L4.003 14 4 18l4.253.003c.189.733.479 1.425.855 2.061l-3.012 3.012 2.828 2.828 3.012-3.012c.637.377 1.33.667 2.064.856V28h4v-4.252a7.952 7.952 0 002.052-.848l3.005 3.01 2.83-2.827-3.002-3.007c.377-.636.67-1.329.86-2.062l4.252.003.003-4-4.248-.003a7.952 7.952 0 00-.86-2.078l3-3-2.828-2.828-3 3A7.952 7.952 0 0018 8.252V4zm-2 16a4 4 0 100-8 4 4 0 000 8z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(Setting));
    