import type { iconProps } from './iconProps';

function openRectArrowOut(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px open rect arrow out';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M13.25,2h-3.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h3.5c.689,0,1.25,.561,1.25,1.25V13.25c0,.689-.561,1.25-1.25,1.25h-3.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h3.5c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Z"
          fill="currentColor"
        />
        <path
          d="M4.561,9.75h5.689c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H4.561l2.22-2.22c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0l-3.5,3.5c-.293,.293-.293,.768,0,1.061l3.5,3.5c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-2.22-2.22Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default openRectArrowOut;
