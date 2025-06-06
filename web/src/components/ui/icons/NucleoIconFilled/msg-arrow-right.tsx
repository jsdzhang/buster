import type { iconProps } from './iconProps';

function msgArrowRight(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px msg arrow right';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M10,14.75c0-1.241,1.01-2.25,2.25-2.25h.264c-.009-.083-.014-.166-.014-.25,0-.601,.234-1.166,.659-1.591,.425-.425,.99-.659,1.591-.659s1.166,.234,1.591,.659l.385,.385c.173-.654,.275-1.336,.275-2.044,0-4.411-3.589-8-8-8S1,4.589,1,9c0,1.397,.371,2.778,1.062,3.971,.238,.446-.095,2.002-.842,2.749-.209,.209-.276,.522-.17,.798,.105,.276,.364,.465,.659,.481,.079,.004,.16,.006,.242,.006,1.145,0,2.534-.407,3.44-.871,.675,.343,1.39,.587,2.131,.727,.484,.092,.981,.138,1.478,.138,.745,0,1.463-.11,2.147-.301-.681-.387-1.147-1.111-1.147-1.949Z"
          fill="currentColor"
        />
        <path
          d="M15.28,11.72c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l1.22,1.22h-3.189c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h3.189l-1.22,1.22c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.5-2.5c.293-.293,.293-.768,0-1.061l-2.5-2.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default msgArrowRight;
