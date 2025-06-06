import type { iconProps } from './iconProps';

function cloneXmark(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px clone xmark';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="m14.25,17h-7c-1.1265,0-2.1274-.6743-2.5503-1.7183-.1553-.3843.0298-.8213.4136-.9771.3857-.1538.8218.0303.9771.4136.1924.4751.6475.7817,1.1597.7817h7c.6895,0,1.25-.5605,1.25-1.25v-7c0-.5122-.3066-.9673-.7817-1.1597-.3838-.1558-.5688-.5928-.4136-.9771.1558-.3833.5938-.5674.9771-.4136,1.0439.4229,1.7183,1.4238,1.7183,2.5503v7c0,1.5161-1.2339,2.75-2.75,2.75Z"
          fill="currentColor"
          strokeWidth="0"
        />
        <path
          d="m10.75,1H3.75c-1.5166,0-2.75,1.2334-2.75,2.75v7c0,1.5166,1.2334,2.75,2.75,2.75h7c1.5166,0,2.75-1.2334,2.75-2.75V3.75c0-1.5166-1.2334-2.75-2.75-2.75Zm-.9697,7.7197c.293.293.293.7676,0,1.0605-.1465.1465-.3384.2197-.5303.2197s-.3838-.0732-.5303-.2197l-1.4697-1.4697-1.4697,1.4697c-.1465.1465-.3384.2197-.5303.2197s-.3838-.0732-.5303-.2197c-.293-.293-.293-.7676,0-1.0605l1.4697-1.4697-1.4697-1.4697c-.293-.293-.293-.7676,0-1.0605s.7676-.293,1.0605,0l1.4697,1.4697,1.4697-1.4697c.293-.293.7676-.293,1.0605,0s.293.7676,0,1.0605l-1.4697,1.4697,1.4697,1.4697Z"
          fill="currentColor"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default cloneXmark;
