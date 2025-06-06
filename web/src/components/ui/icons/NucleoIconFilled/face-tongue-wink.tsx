import type { iconProps } from './iconProps';

function faceTongueWink(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px face tongue wink';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M9,1C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8S13.411,1,9,1Zm-3,6c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Zm6.53,4.281c-.228,.228-.476,.428-.737,.605l.13,.39c.262,.786-.162,1.635-.948,1.897-.157,.053-.317,.078-.475,.078-.628,0-1.214-.397-1.423-1.026l-.163-.489c-1.299-.022-2.521-.532-3.444-1.454-.293-.293-.293-.768,0-1.061,.293-.293,.767-.293,1.061,0,1.322,1.32,3.617,1.32,4.939,0,.294-.292,.769-.292,1.061,0,.293,.293,.293,.768,0,1.061Zm.566-2.576c-.147,.194-.371,.295-.598,.295-.158,0-.317-.05-.454-.153-.128-.098-.399-.263-.775-.269-.39,.015-.707,.186-.816,.27-.331,.25-.801,.186-1.051-.144-.25-.33-.186-.801,.145-1.051,.29-.219,.862-.578,1.746-.574,.805,.012,1.387,.366,1.662,.575,.329,.251,.393,.722,.142,1.051Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default faceTongueWink;
