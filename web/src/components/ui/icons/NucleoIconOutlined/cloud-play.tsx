import type { iconProps } from './iconProps';

function cloudPlay(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px cloud play';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <path
          d="M10.715,8.482l-2.308-1.385c-.403-.242-.916,.048-.916,.518v2.771c0,.47,.513,.76,.916,.518l2.308-1.385c.391-.235,.391-.802,0-1.037Z"
          fill="currentColor"
        />
        <path
          d="M13.464,6.891c-.186-2.314-2.102-4.141-4.464-4.141-2.485,0-4.5,2.015-4.5,4.5,0,.35,.049,.686,.124,1.013-1.597,.067-2.874,1.374-2.874,2.987,0,1.657,1.343,3,3,3h7.75c2.071,0,3.75-1.679,3.75-3.75,0-1.736-1.185-3.182-2.786-3.609Z"
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

export default cloudPlay;
