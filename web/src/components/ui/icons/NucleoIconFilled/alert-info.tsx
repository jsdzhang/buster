import type { iconProps } from './iconProps';

function alertInfo(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '12px alert info';

  return (
    <svg height="1em" width="1em" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="m6,11.5c-.414,0-.75-.336-.75-.75v-6c0-.414.336-.75.75-.75s.75.336.75.75v6c0,.414-.336.75-.75.75Z"
          fill="currentColor"
          strokeWidth="0"
        />
        <circle cx="6" cy="1.5" fill="currentColor" r="1" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default alertInfo;
