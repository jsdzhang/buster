import type { iconProps } from './iconProps';

function bagShopping(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px bag shopping';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <path
          d="M6.75,4.75v-1.75c0-1.243,1.007-2.25,2.25-2.25h0c1.243,0,2.25,1.007,2.25,2.25v1.75"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.334,4.75h7.333c1.037,0,1.903,.793,1.992,1.827l.652,7.5c.102,1.169-.82,2.173-1.992,2.173H4.681c-1.173,0-2.094-1.005-1.992-2.173l.652-7.5c.09-1.034,.955-1.827,1.992-1.827Z"
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

export default bagShopping;
