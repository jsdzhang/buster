import type { iconProps } from './iconProps';

function bra(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px bra';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M2.25,8.993c-.414,0-.75-.336-.75-.75V3c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v5.243c0,.414-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M15.75,8.993c-.414,0-.75-.336-.75-.75V3c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v5.243c0,.414-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M16.413,7.893c-.13-.246-.385-.4-.663-.4-.91,0-2.688,.167-4.376,1.282-1.111,.734-1.809,1.46-2.374,2.192-.564-.731-1.263-1.457-2.374-2.192-1.688-1.115-3.466-1.282-4.376-1.282-.278,0-.533,.154-.663,.4-.836,1.584-.779,3.559,.146,5.034,.22,.356,1.391,2.067,3.604,2.067,.096,0,.194-.003,.294-.01,1.56-.105,2.691-.818,3.37-1.498,.679,.68,1.809,1.393,3.37,1.498,.1,.006,.198,.01,.294,.01,2.213,0,3.384-1.711,3.604-2.069,.924-1.473,.98-3.448,.145-5.032Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default bra;
