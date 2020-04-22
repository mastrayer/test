
      import React from 'react';

      const Calculator: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M22 8H10v4h12V8zm-9 6h-2v2h2v-2zm6 4h2v6h-2v-6zm-6 0h-2v2h2v-2zm2-4h2v2h-2v-2zm6 0h-2v2h2v-2zm-6 4h2v2h-2v-2zm-2 4h-2v2h2v-2zm2 0h2v2h-2v-2z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26 4H6v24h15c1.942 0 3.25-.56 4.056-1.456.785-.873.944-1.9.944-2.544V4zM8 26V6h16v18c0 .356-.091.829-.43 1.206-.32.355-1.012.794-2.57.794H8z" fill="currentColor"/></svg>);
                }
              

                if (size === 'S' && type === 'line') {
                  return (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M5 4h6v2H5V4zm0 3h1v1H5V7zm1 2H5v1h1V9zm3-2h2v5H9V7zm-3 4H5v1h1v-1zm1-2h1v1H7V9zm1-2H7v1h1V7zm-1 4h1v1H7v-1z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 2H3v12h7.5c.971 0 1.625-.28 2.028-.728.393-.436.472-.95.472-1.272V2zM4 13V3h8v9a.9.9 0 01-.215.603c-.16.178-.506.397-1.285.397H4z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M26 4H6v24h16a4 4 0 004-4V4zm-4 4H10v4h12V8zm-11 6h2v2h-2v-2zm10 4h-2v6h2v-6zm-10 0h2v2h-2v-2zm6-4h-2v2h2v-2zm2 0h2v2h-2v-2zm-2 4h-2v2h2v-2zm-6 4h2v2h-2v-2zm6 0h-2v2h2v-2z" fill="currentColor"/></svg>);
                }
              

                if (size === 'S' && type === 'solid') {
                  return (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path fill-rule="evenodd" clip-rule="evenodd" d="M3 2h10v10a2 2 0 01-2 2H3V2zm2 2h6v2H5V4zm1 3H5v1h1V7zM5 9h1v1H5V9zm1 2H5v1h1v-1zm1-4h1v1H7V7zm1 2H7v1h1V9zm-1 2h1v1H7v-1zm4-4H9v5h2V7z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(Calculator));
    