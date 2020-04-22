
      import React from 'react';

      const LetterM: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12zM13.166 9.79H10.46V22h2.194v-5.099c0-.285-.01-.599-.033-.94a31.259 31.259 0 00-.082-1.056c-.033-.363-.066-.715-.099-1.056a45.315 45.315 0 00-.099-.957h.066l.973 2.871 1.898 5.132h1.402l1.881-5.132.99-2.871h.067c-.034.286-.066.605-.1.957-.033.341-.066.693-.099 1.056l-.066 1.056c-.022.341-.033.655-.033.94V22h2.228V9.79h-2.706l-2.03 5.709c-.132.385-.258.775-.379 1.171-.11.396-.231.792-.363 1.188h-.082l-.364-1.188a36.486 36.486 0 00-.379-1.171L13.166 9.79z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12zM13.166 9.94H10.46v12.21h2.194v-5.098c0-.287-.01-.6-.033-.941a31.259 31.259 0 00-.082-1.056c-.033-.363-.066-.715-.099-1.056a45.315 45.315 0 00-.099-.957h.066l.973 2.871 1.898 5.131h1.402l1.881-5.131.99-2.871h.067c-.034.286-.066.605-.1.957-.033.341-.066.693-.099 1.056l-.066 1.056c-.022.341-.033.654-.033.94v5.099h2.228V9.94h-2.706l-2.03 5.709c-.132.385-.258.775-.379 1.171-.11.396-.231.793-.363 1.189h-.082l-.364-1.189a36.486 36.486 0 00-.379-1.171L13.166 9.94z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(LetterM));
    