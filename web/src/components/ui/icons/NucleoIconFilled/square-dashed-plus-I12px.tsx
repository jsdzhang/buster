import type { iconProps } from './iconProps';

function squareDashedPlus(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px square dashed plus';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M12.25,9.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-2.5v-2.5c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v2.5h-2.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h2.5v2.5c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-2.5h2.5Z"
          fill="currentColor"
        />
        <path
          d="M2.75,7.5c.414,0,.75-.336,.75-.75v-2c0-.689,.561-1.25,1.25-1.25h2c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-2c-1.517,0-2.75,1.233-2.75,2.75v2c0,.414,.336,.75,.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M13.25,2h-2c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h2c.689,0,1.25,.561,1.25,1.25v2c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-2c0-1.517-1.233-2.75-2.75-2.75Z"
          fill="currentColor"
        />
        <path
          d="M15.25,10.5c-.414,0-.75,.336-.75,.75v2c0,.689-.561,1.25-1.25,1.25h-2c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h2c1.517,0,2.75-1.233,2.75-2.75v-2c0-.414-.336-.75-.75-.75Z"
          fill="currentColor"
        />
        <path
          d="M6.75,14.5h-2c-.689,0-1.25-.561-1.25-1.25v-2c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v2c0,1.517,1.233,2.75,2.75,2.75h2c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default squareDashedPlus;
