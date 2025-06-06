import type { iconProps } from './iconProps';

function tableSparkle(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px table sparkle';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="m13.25,2H4.75c-1.517,0-2.75,1.233-2.75,2.75v8.5c0,1.519,1.231,2.75,2.75,2.75h4.04c.414,0,.75-.336.75-.75s-.336-.75-.75-.75h-2.29v-6.5h-3v-1.5h3v-3h1.5v3h6.5v2.29c0,.414.336.75.75.75s.75-.336.75-.75v-4.04c0-1.519-1.231-2.75-2.75-2.75Z"
          fill="currentColor"
          strokeWidth="0"
        />
        <path
          d="m16.4873,12.5551l-1.8945-.6309-.6313-1.8945c-.1021-.3057-.3887-.5127-.7114-.5127s-.6094.207-.7114.5127l-.6313,1.8945-1.8945.6309c-.3062.1025-.5127.3887-.5127.7119s.2065.6094.5127.7119l1.8945.6309.6313,1.8945c.1021.3057.3887.5127.7114.5127s.6094-.207.7114-.5127l.6313-1.8945,1.8945-.6309c.3062-.1025.5127-.3887.5127-.7119s-.2065-.6094-.5127-.7119Z"
          fill="currentColor"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default tableSparkle;
