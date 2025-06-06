import type { iconProps } from './iconProps';

function hourglassStart(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px hourglass start';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M14.25,15h-.261c-.056-2.751-.457-4.593-1.989-6,1.532-1.407,1.932-3.249,1.989-6h.261c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H3.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h.261c.056,2.751,.457,4.593,1.989,6-1.532,1.407-1.932,3.249-1.989,6h-.261c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H14.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Zm-6.619-5.38c.205-.14,.328-.372,.328-.62s-.123-.48-.328-.62c-1.53-1.041-2.048-2.32-2.117-5.38h6.972c-.069,3.06-.587,4.339-2.117,5.38-.205,.14-.328,.372-.328,.62s.123,.48,.328,.62c1.53,1.041,2.048,2.32,2.117,5.38H5.514c.069-3.06,.587-4.339,2.117-5.38Z"
          fill="currentColor"
        />
        <path
          d="M11.109,4.571c.024-.167-.022-.289-.117-.398-.095-.11-.233-.173-.378-.173h-3.229c-.145,0-.283,.062-.378,.173-.095,.109-.141,.231-.117,.398,.319,2.394,1.368,2.923,2.109,2.923s1.79-.529,2.109-2.923Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default hourglassStart;
