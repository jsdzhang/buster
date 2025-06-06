import type { iconProps } from './iconProps';

function sidebarLeft3(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px sidebar left 3';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M14.25,2h-5.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h5.25c.689,0,1.25,.561,1.25,1.25V13.25c0,.689-.561,1.25-1.25,1.25h-5.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h5.25c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Z"
          fill="currentColor"
        />
        <path
          d="M6.25,2H3.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75h2.5c.414,0,.75-.336,.75-.75V2.75c0-.414-.336-.75-.75-.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default sidebarLeft3;
