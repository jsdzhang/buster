import type { iconProps } from './iconProps';

function mediaPlayPauseToggle(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px media play pause toggle';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <path
          d="M1.492,4.407l7.501,4.156c.344,.19,.344,.685,0,.875L1.492,13.593c-.333,.185-.742-.056-.742-.437V4.844c0-.381,.409-.622,.742-.437Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 14.25L17.25 3.75"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 14.25L12.25 3.75"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default mediaPlayPauseToggle;
