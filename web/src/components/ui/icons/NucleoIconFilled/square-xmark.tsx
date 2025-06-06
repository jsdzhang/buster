import type { iconProps } from './iconProps';

function squareXmark(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '12px square xmark';

  return (
    <svg height="1em" width="1em" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="m8.75.5H3.25C1.733.5.5,1.733.5,3.25v5.5c0,1.517,1.233,2.75,2.75,2.75h5.5c1.517,0,2.75-1.233,2.75-2.75V3.25c0-1.517-1.233-2.75-2.75-2.75Zm-.22,6.97c.293.293.293.768,0,1.061-.146.146-.338.22-.53.22s-.384-.073-.53-.22l-1.47-1.47-1.47,1.47c-.146.146-.338.22-.53.22s-.384-.073-.53-.22c-.293-.293-.293-.768,0-1.061l1.47-1.47-1.47-1.47c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l1.47,1.47,1.47-1.47c.293-.293.768-.293,1.061,0s.293.768,0,1.061l-1.47,1.47,1.47,1.47Z"
          fill="currentColor"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default squareXmark;
