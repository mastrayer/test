
      import React from 'react';

      const LetterW: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12zM11.24 9.79H8.747L11.108 22h2.986l1.337-6.039c.099-.484.187-.957.264-1.419.088-.473.175-.94.264-1.402h.066a75.784 75.784 0 00.527 2.821L17.922 22h3.036l2.26-12.21h-2.326l-.957 5.957c-.088.637-.181 1.281-.28 1.93-.088.649-.177 1.303-.265 1.963h-.082c-.132-.66-.264-1.314-.396-1.963a75.19 75.19 0 00-.38-1.93L17.113 9.79h-2.079l-1.418 5.957c-.133.637-.264 1.281-.396 1.93a96.066 96.066 0 00-.38 1.963h-.066a91.966 91.966 0 00-.28-1.947 118.47 118.47 0 01-.281-1.947L11.24 9.79z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12zM11.24 9.94H8.747l2.36 12.21h2.986l1.337-6.039c.099-.484.187-.957.264-1.419.088-.473.175-.94.264-1.402h.066a75.784 75.784 0 00.527 2.821l1.37 6.039h3.036l2.26-12.21h-2.326l-.957 5.957a136.22 136.22 0 01-.28 1.93c-.088.649-.177 1.303-.265 1.963h-.082c-.132-.66-.264-1.314-.396-1.963a75.19 75.19 0 00-.38-1.93L17.113 9.94h-2.079l-1.418 5.957a405.54 405.54 0 00-.396 1.93 96.066 96.066 0 00-.38 1.963h-.066a91.966 91.966 0 00-.28-1.947 118.47 118.47 0 01-.281-1.947L11.24 9.94z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(LetterW));
    