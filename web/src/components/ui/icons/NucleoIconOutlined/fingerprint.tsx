import type { iconProps } from './iconProps';

function fingerprint(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px fingerprint';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <path
          d="M5.078,3.462c1.052-.911,2.424-1.462,3.922-1.462,3.309,0,6,2.691,6,6,0,2.307-.363,4.373-.988,6.213"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.908,11.703c1.04-1.692,1.092-3.383,1.092-3.703,0-.912,.204-1.777,.57-2.552"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.87,10.142c-.278,2.234-.983,4.16-1.951,5.806"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.872,14.14c1.224-1.479,2.128-3.474,2.128-6.14,0-1.657,1.343-3,3-3,1.524,0,2.783,1.137,2.975,2.608"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.551,15.618c1.424-1.874,2.449-4.356,2.449-7.618"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default fingerprint;
