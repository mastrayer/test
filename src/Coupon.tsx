
      import React from 'react';

      const Coupon: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M15.293 11.05l1.414-1.414 7.071 7.071-1.414 1.414-7.071-7.07z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.828 1.858l-16.97 16.97 3.656 3.657a3.001 3.001 0 014.001 4l3.657 3.657 16.97-16.97-3.656-3.657a3.001 3.001 0 01-4.001-4l-3.657-3.657zm7.072 9.9a4.992 4.992 0 01-4.243-1.415A4.992 4.992 0 0120.242 6.1L18.83 4.686 4.686 18.828 6.1 20.243a4.992 4.992 0 014.243 1.414 4.993 4.993 0 011.415 4.243l1.414 1.414 14.142-14.142-1.414-1.414z" fill="currentColor"/><path d="M3.252 28.708l.02.02.02.02-.04-.04zM28.728 3.272l.02.02-.04-.04.02.02z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M8.929 23.071c.924.924 1.12 2.3.586 3.415l3.657 3.656 10.606-10.607-8.485-8.485 1.414-1.414 8.485 8.485 4.95-4.95-3.656-3.656a3.001 3.001 0 01-4.001-4l-3.657-3.657-16.97 16.97 3.656 3.657a3.001 3.001 0 013.415.586z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(Coupon));
    