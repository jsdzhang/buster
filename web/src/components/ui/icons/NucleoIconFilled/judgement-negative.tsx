import type { iconProps } from './iconProps';

function judgementNegative(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px judgement negative';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <circle cx="9" cy="3.25" fill="currentColor" r="2.5" />
        <path
          d="M9,6.5c-2.481,0-4.5,2.019-4.5,4.5,0,.414,.336,.75,.75,.75h7.5c.414,0,.75-.336,.75-.75,0-2.481-2.019-4.5-4.5-4.5Z"
          fill="currentColor"
        />
        <path
          d="M15.25,11H2.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h1.25v4.75c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-4.75h7v4.75c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-4.75h1.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill="currentColor"
        />
        <path
          d="M11.03,13.47c-.293-.293-.768-.293-1.061,0l-.97,.97-.97-.97c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l.97,.97-.97,.97c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l.97-.97,.97,.97c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-.97-.97,.97-.97c.293-.293,.293-.768,0-1.061Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default judgementNegative;
