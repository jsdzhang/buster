import type { iconProps } from './iconProps';

function earthCheck(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px earth check';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <path
          d="M5.771,9.887c-.044-.065-.855-1.323-.24-2.575,.067-.137,.484-.949,1.344-1.188,1.273-.353,2.203,.919,2.805,.535,.673-.429-.27-2.156,.507-3.129,.592-.741,1.896-.686,2.883-.531"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.771,9.887c1.589-.439,2.611-.224,3.292,.175,.939,.55,1.006,1.318,1.812,1.469,1.163,.218,1.844-1.227,2.875-1.031,.216,.041,.453,.155,.694,.406"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.601,16.23c.148-.579,.234-1.343-.163-1.938-.423-.635-1.021-.517-1.422-1.182-.418-.694,.014-1.185-.297-2.047-.292-.809-.961-1.174-1.463-1.541-.836-.611-1.874-1.711-2.688-3.859"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.567,16.228c-.187,.014-.376,.022-.567,.022-4.004,0-7.25-3.246-7.25-7.25S4.996,1.75,9,1.75s7.25,3.246,7.25,7.25c0,.187-.007,.372-.021,.555"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.744 15L13.353 16.5 16.75 12"
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

export default earthCheck;
