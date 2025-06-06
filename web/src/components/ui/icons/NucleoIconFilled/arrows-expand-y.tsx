import type { iconProps } from './iconProps';

function arrowsExpandY(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '12px arrows expand y';

  return (
    <svg height="1em" width="1em" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="m8.22,7.97l-1.47,1.47v-2.189c0-.414-.336-.75-.75-.75s-.75.336-.75.75v2.189l-1.47-1.47c-.293-.293-.768-.293-1.061,0s-.293.768,0,1.061l2.75,2.75c.146.146.338.22.53.22s.384-.073.53-.22l2.75-2.75c.293-.293.293-.768,0-1.061s-.768-.293-1.061,0Z"
          fill="currentColor"
          strokeWidth="0"
        />
        <path
          d="m6.53.22c-.293-.293-.768-.293-1.061,0l-2.75,2.75c-.293.293-.293.768,0,1.061s.768.293,1.061,0l1.47-1.47v2.189c0,.414.336.75.75.75s.75-.336.75-.75v-2.189l1.47,1.47c.146.146.338.22.53.22s.384-.073.53-.22c.293-.293.293-.768,0-1.061L6.53.22Z"
          fill="currentColor"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default arrowsExpandY;
