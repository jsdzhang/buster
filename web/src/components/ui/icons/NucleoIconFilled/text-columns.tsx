import type { iconProps } from './iconProps';

function textColumns(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px text columns';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M7.5,11.5H2.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H7.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M7.5,15H2.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H7.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M7.5,8H2.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H7.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M7.5,4.5H2.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H7.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M15.75,11.5h-5.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h5.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M15.75,15h-5.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h5.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M15.75,8h-5.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h5.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M15.75,4.5h-5.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h5.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default textColumns;
