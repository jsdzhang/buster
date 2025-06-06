import type { iconProps } from './iconProps';

function split2(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px split 2';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M7,6.75c0-.689,.561-1.25,1.25-1.25h7v-1.5h-7c-1.517,0-2.75,1.233-2.75,2.75v1.5H1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h3.75v1.5c0,1.517,1.233,2.75,2.75,2.75h7v-1.5h-7c-.689,0-1.25-.561-1.25-1.25V6.75Z"
          fill="currentColor"
        />
        <path
          d="M12.5,16.75c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061l2.22-2.22-2.22-2.22c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l2.75,2.75c.293,.293,.293,.768,0,1.061l-2.75,2.75c-.146,.146-.338,.22-.53,.22Z"
          fill="currentColor"
        />
        <path
          d="M12.5,8.25c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061l2.22-2.22-2.22-2.22c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l2.75,2.75c.293,.293,.293,.768,0,1.061l-2.75,2.75c-.146,.146-.338,.22-.53,.22Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default split2;
