import type { iconProps } from './iconProps';

function searchArea(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px search area';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M2.75,7.5c-.414,0-.75-.336-.75-.75v-2c0-1.517,1.233-2.75,2.75-2.75h2c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75h-2c-.689,0-1.25,.561-1.25,1.25v2c0,.414-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M15.25,7.5c-.414,0-.75-.336-.75-.75v-2c0-.689-.561-1.25-1.25-1.25h-2c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2c1.517,0,2.75,1.233,2.75,2.75v2c0,.414-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M6.75,16h-2c-1.517,0-2.75-1.233-2.75-2.75v-2c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2c0,.689,.561,1.25,1.25,1.25h2c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M15.03,13.97l-2.724-2.724c.437-.641,.693-1.414,.693-2.246,0-2.206-1.794-4-4-4s-4,1.794-4,4,1.794,4,4,4c.832,0,1.605-.257,2.246-.693l2.724,2.724c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061ZM6.5,9c0-1.378,1.122-2.5,2.5-2.5s2.5,1.122,2.5,2.5c0,.688-.28,1.312-.731,1.764,0,0-.002,.001-.003,.002s-.001,.002-.002,.003c-.452,.451-1.076,.731-1.764,.731-1.378,0-2.5-1.122-2.5-2.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default searchArea;
