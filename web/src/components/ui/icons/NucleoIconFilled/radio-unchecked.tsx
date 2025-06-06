import type { iconProps } from './iconProps';

function radioUnchecked(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '12px radio unchecked';

  return (
    <svg height="1em" width="1em" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <circle cx="6" cy="6" fill="currentColor" r="6" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default radioUnchecked;
