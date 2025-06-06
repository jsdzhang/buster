import type { iconProps } from './iconProps';

function gridDots(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '12px grid dots';

  return (
    <svg height="1em" width="1em" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <circle cx="6" cy="6" fill="currentColor" r="1" strokeWidth="0" />
        <circle cx="2" cy="6" fill="currentColor" r="1" strokeWidth="0" />
        <circle cx="10" cy="6" fill="currentColor" r="1" strokeWidth="0" />
        <circle cx="6" cy="10" fill="currentColor" r="1" strokeWidth="0" />
        <circle cx="2" cy="10" fill="currentColor" r="1" strokeWidth="0" />
        <circle cx="10" cy="10" fill="currentColor" r="1" strokeWidth="0" />
        <circle cx="6" cy="2" fill="currentColor" r="1" strokeWidth="0" />
        <circle cx="2" cy="2" fill="currentColor" r="1" strokeWidth="0" />
        <circle cx="10" cy="2" fill="currentColor" r="1" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default gridDots;
