import type { iconProps } from './iconProps';

function labelPlus(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px label plus';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <path
          d="M11.96,16.25H5.75c-1.105,0-2-.895-2-2V7.388c0-.565,.239-1.104,.658-1.483l3.921-3.547c.381-.345,.961-.345,1.342,0l3.921,3.547c.419,.379,.658,.918,.658,1.483v.362"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 10.25L14.25 15.25"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.75 12.75L11.75 12.75"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="9" cy="6.75" fill="currentColor" r="1.25" />
      </g>
    </svg>
  );
}

export default labelPlus;
