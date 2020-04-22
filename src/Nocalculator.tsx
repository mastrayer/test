
      import React from 'react';

      const Nocalculator: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M11 14h2v2h-2v-2zm0 4h2v2h-2v-2zm4 0h2v2h-2v-2zm-2 4h-2v2h2v-2zm2 0h2v2h-2v-2z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3.414l-1 1 2 2V28h15c1.942 0 3.25-.56 4.056-1.456.181-.202.33-.412.45-.624l1.121 1.122 1-1L5 3.414zM8 26V8.414l11 11V24h2v-2.586l2.965 2.965a1.685 1.685 0 01-.396.827c-.32.355-1.011.794-2.569.794H8z" fill="currentColor"/><path d="M26 21.586V4H8.414l2 2H24v13.586l2 2z" fill="currentColor"/><path d="M20.414 16H21v-2h-2v.586L20.414 16zM12.5 8H22v4h-5.5l-4-4z" fill="currentColor"/></svg>);
                }
              

                if (size === 'S' && type === 'line') {
                  return (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M6 7H5v1h1V7zM5 9h1v1H5V9zm0 2h1v1H5v-1zm3-2H7v1h1V9zm-1 2h1v1H7v-1z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.707 2L2 2.707l1 1V14h7.5c.971 0 1.625-.28 2.028-.728a1.53 1.53 0 00.017-.02l.769.769.707-.707L2.707 2zm9.128 10.542L11 11.707V12H9V9.707l-5-5V13h6.5c.779 0 1.125-.22 1.285-.397a.784.784 0 00.05-.061z" fill="currentColor"/><path d="M9 7.293l2 2V7H9v.293z" fill="currentColor"/><path d="M12 3v7.293l1 1V2H3.707l1 1H12z" fill="currentColor"/><path d="M11 4H6l2 2h3V4z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M5.414 3L4 4.414l2 2V28h16a4 4 0 003.509-2.077l1.118 1.119 1.415-1.415L5.414 3zM21 21.414l-2-2V24h2v-2.586zM13 14h-2v2h2v-2zm0 4h-2v2h2v-2zm4 2v-2h-2v2h2zm-6 2h2v2h-2v-2zm6 2v-2h-2v2h2z" fill="currentColor"/><path d="M26 4v17.586L20.414 16H21v-2h-2v.586L16.414 12H22V8h-9.586l-4-4H26z" fill="currentColor"/></svg>);
                }
              

                if (size === 'S' && type === 'solid') {
                  return (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M2.707 2L2 2.707l1 1V14h8c.627 0 1.186-.288 1.553-.74l.76.76.708-.706L2.707 2zM11 11.707l-2-2V12h2v-.293zM5 7h1v1H5V7zm1 2H5v1h1V9zm-1 2h1v1H5v-1zm3-2H7v1h1V9zm-1 2h1v1H7v-1zm4-4v2.293l2 2V2H3.707L9 7.293V7h2zm0-1V4H7l2 2h2z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(Nocalculator));
    