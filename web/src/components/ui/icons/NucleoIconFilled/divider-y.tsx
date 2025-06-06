import type { iconProps } from './iconProps';

function dividerY(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px divider y';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="m4.75,6.5h8.5c1.517,0,2.75-1.233,2.75-2.75v-1c0-.414-.336-.75-.75-.75H2.75c-.414,0-.75.336-.75.75v1c0,1.517,1.233,2.75,2.75,2.75Z"
          fill="currentColor"
          strokeWidth="0"
        />
        <path
          d="m13.25,11.5H4.75c-1.517,0-2.75,1.233-2.75,2.75v1c0,.414.336.75.75.75h12.5c.414,0,.75-.336.75-.75v-1c0-1.517-1.233-2.75-2.75-2.75Z"
          fill="currentColor"
          strokeWidth="0"
        />
        <path
          d="m16,8.25H2c-.414,0-.75.336-.75.75s.336.75.75.75h14c.414,0,.75-.336.75-.75s-.336-.75-.75-.75Z"
          fill="currentColor"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default dividerY;
