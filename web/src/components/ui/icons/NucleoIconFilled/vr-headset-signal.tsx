import type { iconProps } from './iconProps';

function vrHeadsetSignal(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px vr headset signal';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M5.288,4.038c.991-.992,2.31-1.538,3.712-1.538s2.721,.546,3.712,1.538c.146,.146,.338,.22,.53,.22,.191,0,.384-.073,.53-.22,.293-.293,.293-.768,0-1.061-1.274-1.275-2.97-1.977-4.772-1.977s-3.498,.702-4.772,1.977c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0Z"
          fill="currentColor"
        />
        <path
          d="M6.349,5.099c-.293,.293-.293,.768,0,1.061,.294,.293,.769,.292,1.061,0,.85-.851,2.332-.851,3.182,0,.146,.146,.338,.22,.53,.22,.191,0,.384-.073,.53-.219,.293-.293,.293-.768,0-1.061-1.416-1.417-3.887-1.417-5.303,0Z"
          fill="currentColor"
        />
        <path
          d="M15.2,8.709c-1.414-1.116-3.941-1.209-6.2-1.209s-4.786,.093-6.199,1.209c-1.502,1.184-2.003,2.48-1.729,4.477,.263,1.919,1.475,3.303,3.242,3.701,1.657,.375,2.949-.23,3.603-.921,.109-.116,.21-.229,.306-.336,.414-.464,.535-.573,.778-.573s.364,.108,.778,.573c.096,.107,.196,.22,.306,.336,.516,.545,1.427,1.036,2.602,1.036,.315,0,.65-.035,1.001-.115,1.768-.398,2.979-1.781,3.242-3.701,.273-1.996-.228-3.293-1.729-4.477Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default vrHeadsetSignal;
