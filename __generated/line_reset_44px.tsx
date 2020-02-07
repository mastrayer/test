import React from 'react';

export default React.forwardRef<SVGSVGElement, JSX.IntrinsicElements['svg']>(({ ...props }, ref) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
    <path d="M0 0H24V24H0V0Z" fill="white" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.49439 7.19601L5.49439 3.27276L3.27344 3.27276L3.27344 10.9544L10.9583 10.9544L10.9583 8.73434L7.07753 8.73434C8.23537 6.92009 10.2666 5.71699 12.579 5.71699C16.1803 5.71699 19.0998 8.63521 19.0998 12.235C19.0998 15.8349 16.1803 18.7531 12.579 18.7531C10.1654 18.7531 8.05811 17.4424 6.93058 15.4941L4.51659 15.4941C5.80637 18.6791 8.93012 20.9258 12.579 20.9258C17.3808 20.9258 21.2734 17.0349 21.2734 12.235C21.2734 7.43522 17.3808 3.5443 12.579 3.5443C9.65638 3.5443 7.07067 4.98563 5.49439 7.19601Z"
      fill="#DDDDDD"
    />
  </svg>
));
