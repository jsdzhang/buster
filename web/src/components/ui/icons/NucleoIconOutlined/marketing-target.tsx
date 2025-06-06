import type { iconProps } from './iconProps';

function marketingTarget(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px marketing target';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <path
          d="M9.217,9.622l2.016,5.781c.099,.283,.498,.285,.599,.003l.895-2.487c.032-.089,.102-.159,.191-.191l2.487-.895c.282-.101,.28-.501-.003-.599l-5.781-2.016c-.251-.088-.492,.154-.405,.405Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.778 12.778L16.25 16.25"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.244,8.879c-.065-3.948-3.281-7.129-7.244-7.129C4.996,1.75,1.75,4.996,1.75,9c0,3.963,3.182,7.179,7.13,7.244-.002-.006-.005-.011-.008-.017"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.046,7.763c-.532-1.74-2.132-3.013-4.046-3.013-2.347,0-4.25,1.903-4.25,4.25,0,1.914,1.273,3.513,3.013,4.045"
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

export default marketingTarget;
