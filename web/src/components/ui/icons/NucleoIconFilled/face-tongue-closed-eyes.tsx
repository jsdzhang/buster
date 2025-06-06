import type { iconProps } from './iconProps';

function faceTongueClosedEyes(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px face tongue closed eyes';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M9,1C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8S13.411,1,9,1Zm-5,7.25c0-1.103,.897-2,2-2s2,.897,2,2c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75c0-.276-.225-.5-.5-.5s-.5,.224-.5,.5c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75Zm8.53,3.031c-.228,.228-.476,.428-.737,.605l.13,.39c.262,.786-.162,1.635-.948,1.897-.157,.053-.317,.078-.475,.078-.628,0-1.214-.397-1.423-1.026l-.163-.489c-1.299-.022-2.521-.532-3.444-1.454-.293-.293-.293-.768,0-1.061,.292-.293,.767-.293,1.061,0,1.322,1.32,3.617,1.32,4.939,0,.294-.292,.769-.292,1.061,0,.293,.293,.293,.768,0,1.061Zm.72-2.281c-.414,0-.75-.336-.75-.75,0-.276-.225-.5-.5-.5s-.5,.224-.5,.5c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75c0-1.103,.897-2,2-2s2,.897,2,2c0,.414-.336,.75-.75,.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default faceTongueClosedEyes;
