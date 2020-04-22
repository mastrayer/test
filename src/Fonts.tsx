
      import React from 'react';

      const Fonts: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M8.848 19.2h5.76l1.248 4.56h3.72L13.864 6H9.688L4 23.76h3.6l1.248-4.56zm4.464-4.704l.528 1.944H9.616l.528-1.944c.272-.928.536-1.88.792-2.856.256-.992.496-1.976.72-2.952h.096c.272.96.528 1.936.768 2.928.256.992.52 1.952.792 2.88zm8.347 9.316c.352.125.744.188 1.176.188.545 0 1.057-.103 1.534-.308a5.025 5.025 0 001.347-.84h.05l.188.977H28v-5.6c0-1.392-.307-2.442-.92-3.15-.614-.72-1.529-1.079-2.745-1.079-.75 0-1.472.108-2.165.325a8.245 8.245 0 00-1.807.805l.75 1.798a5.811 5.811 0 011.364-.668c.489-.16.955-.24 1.398-.24.727 0 1.187.155 1.38.463.205.297.285.696.24 1.198-1.978.058-3.404.371-4.28.942-.863.56-1.267 1.427-1.21 2.603 0 .411.068.788.205 1.13.136.343.324.64.562.89.25.24.546.429.887.566zm2.932-1.97a2.338 2.338 0 01-.989.24c-.364 0-.67-.114-.92-.342-.24-.229-.364-.542-.375-.942-.012-.342.09-.64.306-.89.228-.252.614-.417 1.16-.497.545-.08 1.119-.143 1.721-.188v1.934a3.708 3.708 0 01-.903.686z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M8.848 19.2h5.76l1.248 4.56h3.72L13.864 6H9.688L4 23.76h3.6l1.248-4.56zm4.464-4.704l.528 1.944H9.616l.528-1.944c.272-.928.536-1.88.792-2.856.256-.992.496-1.976.72-2.952h.096c.272.96.528 1.936.768 2.928.256.992.52 1.952.792 2.88zm8.347 9.316c.352.125.744.188 1.176.188.545 0 1.057-.103 1.534-.308a5.025 5.025 0 001.347-.84h.05l.188.977H28v-5.6c0-1.392-.307-2.442-.92-3.15-.614-.72-1.529-1.079-2.745-1.079-.75 0-1.472.108-2.165.325a8.245 8.245 0 00-1.807.805l.75 1.798a5.811 5.811 0 011.364-.668c.489-.16.955-.24 1.398-.24.727 0 1.187.155 1.38.463.205.297.285.696.24 1.198-1.978.058-3.404.371-4.28.942-.863.56-1.267 1.427-1.21 2.603 0 .411.068.788.205 1.13.136.343.324.64.562.89.25.24.546.429.887.566zm2.932-1.97a2.338 2.338 0 01-.989.24c-.364 0-.67-.114-.92-.342-.24-.229-.364-.542-.375-.942-.012-.342.09-.64.306-.89.228-.252.614-.417 1.16-.497.545-.08 1.119-.143 1.721-.188v1.934a3.708 3.708 0 01-.903.686z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(Fonts));
    