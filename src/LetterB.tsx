import React from 'react';

export default React.forwardRef<
  SVGSVGElement,
  JSX.IntrinsicElements['svg'] & {
    size: 'S' | 'L';
    type: 'solid' | 'line';
  }
>(({ size = 'L', type = 'solid', ...props }, ref) => {
  if (type === 'line') {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12zm-11.998-6H12v12.087h4.312c.664 0 1.28-.07 1.846-.212a4.313 4.313 0 001.486-.654c.425-.294.757-.664.997-1.11.24-.447.359-.975.359-1.585 0-.816-.218-1.459-.653-1.927a3.064 3.064 0 00-1.617-.931v-.082c.26-.087.49-.218.686-.392.206-.185.38-.392.522-.62.142-.24.25-.496.327-.768.076-.272.114-.55.114-.833 0-.567-.114-1.04-.343-1.421a2.458 2.458 0 00-.914-.915 4.264 4.264 0 00-1.389-.49A9.592 9.592 0 0016.002 10zm1.503 4.492c-.349.283-.91.424-1.683.424h-1.405v-3.07h1.438c.73 0 1.274.114 1.633.343.36.228.54.61.54 1.143 0 .49-.175.877-.523 1.16zm.49 5.292c-.436.294-1.068.441-1.895.441h-1.683v-3.512H16.1c.838 0 1.47.13 1.895.392.435.262.653.686.653 1.274 0 .632-.218 1.1-.653 1.405z"
          fill="currentColor"
        />
      </svg>
    );
  } else if (type === 'solid') {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          d="M17.505 14.492c-.349.283-.91.424-1.683.424h-1.405v-3.07h1.438c.73 0 1.274.114 1.633.343.36.228.54.61.54 1.143 0 .49-.175.877-.523 1.16zM17.995 19.784c-.436.294-1.068.441-1.895.441h-1.683v-3.512H16.1c.838 0 1.47.13 1.895.392.435.262.653.686.653 1.274 0 .632-.218 1.1-.653 1.405z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12zm.002-18H12v12.087h4.312c.664 0 1.28-.07 1.846-.212a4.313 4.313 0 001.486-.654c.425-.294.757-.664.997-1.11.24-.447.359-.975.359-1.585 0-.816-.218-1.459-.653-1.927a3.064 3.064 0 00-1.617-.931v-.082c.26-.087.49-.218.686-.392.206-.185.38-.392.522-.62.142-.24.25-.496.327-.768.076-.272.114-.55.114-.833 0-.567-.114-1.04-.343-1.421a2.458 2.458 0 00-.914-.915 4.264 4.264 0 00-1.389-.49A9.592 9.592 0 0016.002 10z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return null;
});