
      import React from 'react';

      const Forward5: React.ForwardRefRenderFunction<
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
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M16 24a8 8 0 115.227-14.056l-1.748 1.748 6.693 1.793-1.794-6.692-1.733 1.734A9.962 9.962 0 0016 6C10.477 6 6 10.477 6 16s4.477 10 10 10c4.1 0 7.625-2.468 9.168-6H22.93A7.997 7.997 0 0116 24z" fill="currentColor"/><path d="M15.374 13.445h3.319V12h-4.465a527.42 527.42 0 01-.732 4.394l.992.294c.205-.07.414-.13.626-.176.22-.047.441-.079.661-.094.536-.016.941.11 1.217.376.284.266.425.634.425 1.104 0 .51-.145.92-.437 1.234-.283.313-.693.47-1.228.47a2.06 2.06 0 01-.65-.094 5.018 5.018 0 01-.472-.2 7.054 7.054 0 01-.355-.211 6.798 6.798 0 01-.448-.353L13 19.943c.15.14.323.274.52.399s.405.239.626.34c.228.095.468.17.72.224.252.063.516.094.791.094.473 0 .914-.074 1.323-.223a3.3 3.3 0 001.063-.646c.3-.282.532-.62.697-1.01a3.16 3.16 0 00.26-1.293 3.06 3.06 0 00-.189-1.081 2.392 2.392 0 00-.555-.87 2.529 2.529 0 00-.91-.587 3.435 3.435 0 00-1.252-.212 5.54 5.54 0 00-.496.024 4.225 4.225 0 00-.52.059l.296-1.716z" fill="currentColor"/></svg>);
                }
              

                if (size === 'L' && type === 'solid') {
                  return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}><path d="M16 24a8 8 0 115.227-14.056l-1.748 1.748 6.693 1.793-1.794-6.692-1.733 1.734A9.962 9.962 0 0016 6C10.477 6 6 10.477 6 16s4.477 10 10 10c4.1 0 7.625-2.468 9.168-6H22.93A7.997 7.997 0 0116 24z" fill="currentColor"/><path d="M15.374 13.445h3.319V12h-4.465a527.42 527.42 0 01-.732 4.394l.992.294c.205-.07.414-.13.626-.176.22-.047.441-.079.661-.094.536-.016.941.11 1.217.376.284.266.425.634.425 1.104 0 .51-.145.92-.437 1.234-.283.313-.693.47-1.228.47a2.06 2.06 0 01-.65-.094 5.018 5.018 0 01-.472-.2 7.054 7.054 0 01-.355-.211 6.798 6.798 0 01-.448-.353L13 19.943c.15.14.323.274.52.399s.405.239.626.34c.228.095.468.17.72.224.252.063.516.094.791.094.473 0 .914-.074 1.323-.223a3.3 3.3 0 001.063-.646c.3-.282.532-.62.697-1.01a3.16 3.16 0 00.26-1.293 3.06 3.06 0 00-.189-1.081 2.392 2.392 0 00-.555-.87 2.529 2.529 0 00-.91-.587 3.435 3.435 0 00-1.252-.212 5.54 5.54 0 00-.496.024 4.225 4.225 0 00-.52.059l.296-1.716z" fill="currentColor"/></svg>);
                }
              

        throw new Error('invalid props');
      };

      export default React.memo(React.forwardRef(Forward5));
    