import type { iconProps } from './iconProps';

function arrowTurnUp(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px arrow turn up';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M14.25,16h-4c-1.517,0-2.75-1.233-2.75-2.75V3c0-.414,.336-.75,.75-.75s.75,.336,.75,.75V13.25c0,.689,.561,1.25,1.25,1.25h4c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M12.5,7.75c-.192,0-.384-.073-.53-.22l-3.72-3.72-3.72,3.72c-.293,.293-.768,.293-1.061,0s-.293-.768,0-1.061L7.72,2.22c.293-.293,.768-.293,1.061,0l4.25,4.25c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default arrowTurnUp;
