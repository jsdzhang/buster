import type { iconProps } from './iconProps';

function fxBlur(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px fx blur';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <circle cx="6.5" cy="2" fill="currentColor" r="1" />
        <circle cx="11.5" cy="2" fill="currentColor" r="1" />
        <circle cx="16" cy="6.5" fill="currentColor" r="1" />
        <circle cx="16" cy="11.5" fill="currentColor" r="1" />
        <circle cx="11.5" cy="16" fill="currentColor" r="1" />
        <circle cx="6.5" cy="16" fill="currentColor" r="1" />
        <circle cx="2" cy="11.5" fill="currentColor" r="1" />
        <circle cx="2" cy="6.5" fill="currentColor" r="1" />
        <circle
          cx="6.5"
          cy="6.5"
          fill="none"
          r="1.25"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="11.5"
          cy="6.5"
          fill="none"
          r="1.25"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="6.5"
          cy="11.5"
          fill="none"
          r="1.25"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="11.5"
          cy="11.5"
          fill="none"
          r="1.25"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default fxBlur;
