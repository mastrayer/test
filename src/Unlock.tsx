
      import React from 'react';

      const Unlock: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M22 6c.072 0 .143.001.213.005 1.988.104 3.605 1.656 3.605 3.604v2.99H26a2 2 0 002-1.997v-.993c0-2.981-2.501-5.454-5.696-5.602a6.544 6.544 0 00-.608 0C18.501 4.155 16 6.628 16 9.609V15H4v13h12a4 4 0 004-4v-9h-1.818V9.609c0-1.948 1.617-3.5 3.605-3.604A3.76 3.76 0 0122 5.999zm-4 18a2 2 0 01-2 2H6v-9h12v7z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M18.182 9.616c0-2.02 1.734-3.614 3.818-3.614s3.818 1.595 3.818 3.614v2.994H26a2 2 0 002-2v-.994C28 6.537 25.339 4 22 4s-6 2.537-6 5.616V16h2.182V9.616zM20 16H4v12h12a4 4 0 004-4v-8z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(Unlock));
    