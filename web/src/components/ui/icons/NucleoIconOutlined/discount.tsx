import type { iconProps } from './iconProps';

function discount(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px discount';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <path
          d="M15.718,8.293l-1.468-1.468v-2.075c0-.552-.448-1-1-1h-2.075l-1.468-1.468c-.391-.39-1.024-.39-1.414,0l-1.468,1.468h-2.075c-.552,0-1,.448-1,1v2.075l-1.468,1.468c-.391,.39-.391,1.024,0,1.414l1.468,1.468v2.075c0,.552,.448,1,1,1h2.075l1.468,1.468c.391,.39,1.024,.39,1.414,0l1.468-1.468h2.075c.552,0,1-.448,1-1v-2.075l1.468-1.468c.391-.39,.391-1.024,0-1.414Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 11.25L11.25 6.75"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="7" cy="7" fill="currentColor" r="1" />
        <circle cx="11" cy="11" fill="currentColor" r="1" />
      </g>
    </svg>
  );
}

export default discount;
