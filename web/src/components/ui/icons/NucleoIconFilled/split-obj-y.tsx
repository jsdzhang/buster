import type { iconProps } from './iconProps';

function splitObjY(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px split obj y';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M13.25,16h-2c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2c.689,0,1.25-.561,1.25-1.25v-1.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1.5c0,1.517-1.233,2.75-2.75,2.75Z"
          fill="currentColor"
        />
        <path
          d="M6.75,16h-2c-1.517,0-2.75-1.233-2.75-2.75v-1.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1.5c0,.689,.561,1.25,1.25,1.25h2c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M16.75,8h-.75v-3.25c0-1.517-1.233-2.75-2.75-2.75H4.75c-1.517,0-2.75,1.233-2.75,2.75v3.25h-.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h15.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default splitObjY;
