import type { iconProps } from './iconProps';

function squareArrowDown(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px square arrow down';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M13.25,2H4.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75H13.25c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Zm-1.22,8.28l-2.5,2.5c-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22l-2.5-2.5c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l1.22,1.22V5.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v4.689l1.22-1.22c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default squareArrowDown;
