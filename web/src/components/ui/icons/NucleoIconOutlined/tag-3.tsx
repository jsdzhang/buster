import type { iconProps } from './iconProps';

function tag3(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px tag 3';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <path
          d="M3.25,2.25h4.922c.53,0,1.039,.211,1.414,.586l5.75,5.75c.781,.781,.781,2.047,0,2.828l-3.922,3.922c-.781,.781-2.047,.781-2.828,0L2.836,9.586c-.375-.375-.586-.884-.586-1.414V3.25c0-.552,.448-1,1-1Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10 12L8 10"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 10L10 8"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="6.25" cy="6.25" fill="currentColor" r="1.25" />
      </g>
    </svg>
  );
}

export default tag3;
