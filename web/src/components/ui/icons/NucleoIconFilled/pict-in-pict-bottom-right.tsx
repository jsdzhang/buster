import type { iconProps } from './iconProps';

function pictInPictBottomRight(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px pict in pict bottom right';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M13.25,2H4.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75h2.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-2.5c-.689,0-1.25-.561-1.25-1.25V4.75c0-.689,.561-1.25,1.25-1.25H13.25c.689,0,1.25,.561,1.25,1.25v2.5c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-2.5c0-1.517-1.233-2.75-2.75-2.75Z"
          fill="currentColor"
        />
        <path
          d="M4.5,8.25c0,.414,.336,.75,.75,.75h3c.414,0,.75-.336,.75-.75v-3c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v1.189l-1.47-1.47c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l1.47,1.47h-1.189c-.414,0-.75,.336-.75,.75Z"
          fill="currentColor"
        />
        <rect height="7.5" width="7.5" fill="currentColor" rx="2.75" ry="2.75" x="8.5" y="8.5" />
      </g>
    </svg>
  );
}

export default pictInPictBottomRight;
