import type { iconProps } from './iconProps';

function stringStartsWith(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px string starts with';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="m9.5,8.75h-.001v-.8662c0-1.5903-1.2935-2.8838-2.8838-2.8838-.9839,0-1.8472.3457-2.4307.9731-.2817.3032-.2646.7778.0386,1.0601s.7783.2651,1.0601-.0386c.3799-.4087.9341-.4946,1.332-.4946.6111,0,1.1249.4006,1.3077.9512.0277.1077-.071.2346-.1852.2563l-2.2861.4019c-.9863.1855-1.7017,1.0488-1.7017,2.0522,0,1.1514.937,2.0884,2.0884,2.0884h.1616c.7532,0,1.4473-.2446,2.019-.6511.0505.3652.3511.6511.73.6511.4141,0,.75-.3359.75-.75,0,0,.001-2.7466.001-2.75Zm-3.5,2h-.1616c-.3242,0-.5884-.2642-.5884-.5884,0-.2827.2017-.5259.4702-.5767l2.2305-.3916c-.2021.8901-1,1.5566-1.9507,1.5566Z"
          fill="currentColor"
          strokeWidth="0"
        />
        <path
          d="m14,5.25c-.5488,0-1.0569.1855-1.5.4868v-2.9868c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v8.75c0,.4141.3359.75.75.75.3314,0,.6038-.2188.7029-.5168.4532.3213.9791.5168,1.5471.5168,1.6543,0,3-1.5703,3-3.5s-1.3457-3.5-3-3.5Zm0,5.5c-.813,0-1.5-.916-1.5-2s.687-2,1.5-2,1.5.916,1.5,2-.687,2-1.5,2Z"
          fill="currentColor"
          strokeWidth="0"
        />
        <path
          d="m16.25,15.5H3.25c-1.5166,0-2.75-1.2334-2.75-2.75v-1.5c0-.4141.3359-.75.75-.75s.75.3359.75.75v1.5c0,.6895.5605,1.25,1.25,1.25h13c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill="currentColor"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default stringStartsWith;
