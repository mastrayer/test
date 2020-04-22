
      import React from 'react';

      const AddUser: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M22 11a5 5 0 11-10 0 5 5 0 0110 0zm-2 0a3 3 0 11-6 0 3 3 0 016 0zm-3 7c6.075 0 11 2.149 11 4.8V26H6v-3.2c0-2.651 4.925-4.8 11-4.8zm-9 4.8c0-.013.001-.048.034-.118.036-.077.113-.2.267-.358.318-.329.876-.716 1.72-1.085C11.706 20.504 14.172 20 17 20c2.829 0 5.295.504 6.978 1.239.845.369 1.403.756 1.721 1.085a1.4 1.4 0 01.267.358c.033.07.034.105.034.118V24H8v-1.2z" fill="currentColor"/><path d="M6 12h2v2h2v2H8a2 2 0 01-2 2v-2H4v-2h2v-2z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M22 11a5 5 0 11-10 0 5 5 0 0110 0zm-5 7c-6.075 0-11 2.149-11 4.8V26h22v-3.2c0-2.651-4.925-4.8-11-4.8zM6 12h2v2h2v2H8a2 2 0 01-2 2v-2H4v-2h2v-2z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(AddUser));
    