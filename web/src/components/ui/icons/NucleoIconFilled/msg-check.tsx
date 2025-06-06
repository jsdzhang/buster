import type { iconProps } from './iconProps';

function msgCheck(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px msg check';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M10.709,16.396c-.439-.409-.693-.966-.714-1.567s.193-1.174,.604-1.614c.424-.454,1.023-.714,1.645-.714,.472,0,.926,.146,1.305,.417l1.905-2.523c.368-.485,.923-.785,1.519-.861,.012-.177,.027-.353,.027-.533,0-4.411-3.589-8-8-8S1,4.589,1,9c0,1.396,.371,2.776,1.062,3.971,.238,.446-.095,2.002-.842,2.749-.209,.209-.276,.522-.17,.798,.106,.276,.365,.465,.66,.481,.079,.004,.16,.006,.241,.006,1.145,0,2.535-.407,3.44-.871,.675,.343,1.39,.587,2.131,.728,.484,.092,.982,.138,1.478,.138,.713,0,1.401-.103,2.059-.279l-.35-.326Z"
          fill="currentColor"
        />
        <path
          d="M16.651,11.298l-2.896,3.836-1-.932c-.303-.282-.777-.266-1.06,.037s-.266,.777,.037,1.06l1.609,1.5c.139,.13,.322,.202,.511,.202,.021,0,.043,0,.065-.003,.212-.019,.406-.125,.534-.295l3.397-4.5c.25-.331,.184-.801-.146-1.051-.331-.249-.801-.183-1.051,.146Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default msgCheck;
