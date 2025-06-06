import type { iconProps } from './iconProps';

function caretRightFromLine(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px caret right from line';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <path
          d="M2.75 3.25L2.75 14.75"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.668,8.155L7.286,3.474c-.666-.422-1.536,.056-1.536,.845V13.682c0,.788,.87,1.267,1.536,.845l7.383-4.682c.619-.393,.619-1.296,0-1.689Z"
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

export default caretRightFromLine;
