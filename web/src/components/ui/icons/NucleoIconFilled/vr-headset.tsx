import type { iconProps } from './iconProps';

function vrHeadset(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px vr headset';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M15.595,5.255c-1.499-1.182-4.19-1.281-6.595-1.281s-5.097,.099-6.595,1.281C.816,6.508,.286,7.881,.576,9.993c.278,2.029,1.559,3.492,3.426,3.913,1.75,.394,3.112-.243,3.801-.971,.117-.123,.224-.243,.326-.357,.448-.502,.592-.63,.871-.63s.423,.127,.871,.63c.102,.114,.209,.234,.325,.357,.544,.574,1.504,1.092,2.744,1.092,.333,0,.687-.038,1.058-.122,1.867-.421,3.148-1.884,3.426-3.913,.29-2.112-.241-3.485-1.829-4.738Zm-3.594,2.86c-.03,0-.061-.002-.092-.005-.736-.09-1.715-.136-2.909-.136s-2.172,.046-2.909,.136c-.42,.043-.785-.243-.836-.653-.05-.411,.242-.785,.653-.836,.797-.098,1.837-.147,3.091-.147s2.294,.049,3.091,.147c.411,.051,.704,.425,.653,.836-.047,.38-.37,.659-.744,.659Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default vrHeadset;
