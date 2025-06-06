import type { iconProps } from './iconProps';

function cartKey(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px cart key';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <circle cx="14.25" cy="15.75" fill="currentColor" r="1.25" />
        <circle cx="3.75" cy="15.75" fill="currentColor" r="1.25" />
        <path
          d="M15.25,12.5H4.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5H13.029c.754,0,1.421-.48,1.66-1.196l1.037-3.111c-.154,.034-.312,.057-.476,.057-.614,0-1.171-.247-1.578-.647-.663,.566-1.516,.897-2.422,.897-1.982,0-3.593-1.551-3.725-3.5h-2.76l-.176-1.196c-.103-.704-.616-1.271-1.307-1.444l-1.351-.337c-.403-.1-.809,.144-.909,.546-.101,.402,.144,.809,.546,.909l1.35,.337c.099,.025,.172,.105,.187,.207l1.032,7.015c-.93,.172-1.637,.985-1.637,1.963,0,1.103,.897,2,2,2H15.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill="currentColor"
        />
        <path
          d="M16.25,3h-2.888c-.311-.871-1.135-1.5-2.112-1.5-1.241,0-2.25,1.009-2.25,2.25s1.009,2.25,2.25,2.25c.976,0,1.801-.629,2.112-1.5h1.138v.5c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-.5h.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Zm-5,1.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75,.75,.336,.75,.75-.336,.75-.75,.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default cartKey;
