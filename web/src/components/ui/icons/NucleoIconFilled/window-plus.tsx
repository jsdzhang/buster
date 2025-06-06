import type { iconProps } from './iconProps';

function windowPlus(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px window plus';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M14.25,2H3.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75H14.25c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Zm-7.25,2c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Zm-3,2c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm7.5,4.5h-1.75v1.75c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-1.75h-1.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1.75v-1.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1.75h1.75c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default windowPlus;
