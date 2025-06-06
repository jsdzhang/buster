import type { iconProps } from './iconProps';

function arrowTurnUp2(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '12px arrow turn up 2';

  return (
    <svg height="1em" width="1em" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="m4.25,11.5h-2c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h2c.689,0,1.25-.561,1.25-1.25V1.25c0-.414.336-.75.75-.75s.75.336.75.75v7.5c0,1.517-1.233,2.75-2.75,2.75Z"
          fill="currentColor"
          strokeWidth="0"
        />
        <path
          d="m9.5,5c-.192,0-.384-.073-.53-.22l-2.72-2.72-2.72,2.72c-.293.293-.768.293-1.061,0s-.293-.768,0-1.061L5.72.47c.293-.293.768-.293,1.061,0l3.25,3.25c.293.293.293.768,0,1.061-.146.146-.338.22-.53.22Z"
          fill="currentColor"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default arrowTurnUp2;
