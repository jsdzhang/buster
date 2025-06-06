import type { iconProps } from './iconProps';

function atSign(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px at sign';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <ellipse
          cx="8.875"
          cy="8.875"
          fill="none"
          rx="2.875"
          ry="3.125"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75,5.75v5.183c0,1.554,2.336,1.822,3.572-.279,1.048-1.778,.791-4.49-.518-6.274-1.926-2.627-6.379-3.609-9.613-1.438-2.973,1.996-4.031,6.033-2.389,9.296,1.625,3.229,5.44,4.794,8.893,3.626"
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

export default atSign;
