
      import React from 'react';

      const ReportError: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M16 20a1 1 0 110 2 1 1 0 010-2zm1-2v-8h-2v8h2z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.027 4h9.946L28 11.027v9.946L20.973 28h-9.946L4 20.973v-9.946L11.027 4zM6 11.855L11.855 6h8.29L26 11.855v8.29L20.145 26h-8.29L6 20.145v-8.29z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M11.027 4h9.946L28 11.027v9.946L20.973 28h-9.946L4 20.973v-9.946L11.027 4zM16 20a1 1 0 110 2 1 1 0 010-2zm1-2v-8h-2v8h2z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(ReportError));
    