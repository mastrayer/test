
      import React from 'react';

      const ChevronUp: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M15.9 10L6 19.9l1.414 1.414 8.485-8.486 8.486 8.486 1.414-1.415-9.9-9.899z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M15.9 10L6 19.9l1.414 1.414 8.485-8.486 8.486 8.486 1.414-1.415-9.9-9.899z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(ChevronUp));
    