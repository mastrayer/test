import React from 'react';

export default React.forwardRef<SVGSVGElement, JSX.IntrinsicElements['svg']>(({ ...props }, ref) => (
  <svg width="70" height="48" viewBox="0 0 70 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
    <g filter="url(#filter0_d)">
      <rect x="7.5" y="4.5" width="55" height="33" rx="3.5" fill="white" fillOpacity="0.9" stroke="#DDDDDD" />
      <mask id="path-4-inside-1" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34.589 16.4868L33.0462 15L26.8203 21L33.0462 27L34.589 25.5132L31.0379 22.0909H40.4567C41.6616 22.0909 42.6385 21.1141 42.6385 19.9091H31.0379L34.589 16.4868Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.589 16.4868L33.0462 15L26.8203 21L33.0462 27L34.589 25.5132L31.0379 22.0909H40.4567C41.6616 22.0909 42.6385 21.1141 42.6385 19.9091H31.0379L34.589 16.4868Z"
        fill="#505050"
      />
      <path
        d="M33.0462 15L33.7402 14.2799L33.0462 13.6112L32.3523 14.2799L33.0462 15ZM34.589 16.4868L35.2829 17.2068L36.0301 16.4868L35.2829 15.7667L34.589 16.4868ZM26.8203 21L26.1264 20.2799L25.3792 21L26.1264 21.7201L26.8203 21ZM33.0462 27L32.3523 27.7201L33.0462 28.3888L33.7402 27.7201L33.0462 27ZM34.589 25.5132L35.2829 26.2333L36.0301 25.5132L35.2829 24.7932L34.589 25.5132ZM31.0379 22.0909V21.0909H28.5591L30.3439 22.811L31.0379 22.0909ZM42.6385 19.9091H43.6385V18.9091H42.6385V19.9091ZM31.0379 19.9091L30.3439 19.189L28.5591 20.9091H31.0379V19.9091ZM32.3523 15.7201L33.8951 17.2068L35.2829 15.7667L33.7402 14.2799L32.3523 15.7201ZM27.5142 21.7201L33.7402 15.7201L32.3523 14.2799L26.1264 20.2799L27.5142 21.7201ZM33.7402 26.2799L27.5142 20.2799L26.1264 21.7201L32.3523 27.7201L33.7402 26.2799ZM33.8951 24.7932L32.3523 26.2799L33.7402 27.7201L35.2829 26.2333L33.8951 24.7932ZM30.3439 22.811L33.8951 26.2333L35.2829 24.7932L31.7318 21.3709L30.3439 22.811ZM40.4567 21.0909H31.0379V23.0909H40.4567V21.0909ZM41.6385 19.9091C41.6385 20.5618 41.1094 21.0909 40.4567 21.0909V23.0909C42.2139 23.0909 43.6385 21.6664 43.6385 19.9091H41.6385ZM31.0379 20.9091H42.6385V18.9091H31.0379V20.9091ZM33.8951 15.7667L30.3439 19.189L31.7318 20.6291L35.2829 17.2068L33.8951 15.7667Z"
        fill="#DDDDDD"
        mask="url(#path-4-inside-1)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="70"
        height="48"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="3.5" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
));
