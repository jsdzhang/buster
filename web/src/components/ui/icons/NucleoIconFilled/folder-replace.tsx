import type { iconProps } from './iconProps';

function folderReplace(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px folder replace';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M14.75,10h-2.519l-1.099-1.353c-.333-.411-.829-.647-1.358-.647h-1.524c-.965,0-1.75,.785-1.75,1.75v5c0,1.241,1.009,2.25,2.25,2.25h6c1.241,0,2.25-1.009,2.25-2.25v-2.5c0-1.241-1.009-2.25-2.25-2.25Z"
          fill="currentColor"
        />
        <path
          d="M10,5.25v1c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1c0-1.241-1.009-2.25-2.25-2.25h-2.519l-1.099-1.353c-.333-.411-.829-.647-1.358-.647h-1.524c-.965,0-1.75,.785-1.75,1.75V7.75c0,1.241,1.009,2.25,2.25,2.25h1.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-1.5c-.414,0-.75-.336-.75-.75V2.75c0-.138,.112-.25,.25-.25h1.524c.076,0,.146,.034,.194,.092l1.323,1.63c.143,.175,.356,.277,.583,.277h2.876c.414,0,.75,.336,.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M4.87,13.968c-1.083-.184-1.87-1.117-1.87-2.218,0-.414-.336-.75-.75-.75s-.75,.336-.75,.75c0,1.836,1.312,3.391,3.12,3.697,.042,.007,.084,.011,.126,.011,.359,0,.677-.259,.738-.625,.069-.408-.206-.795-.614-.864Z"
          fill="currentColor"
        />
        <path
          d="M13.13,6.032c1.083,.184,1.87,1.117,1.87,2.218,0,.414,.336,.75,.75,.75s.75-.336,.75-.75c0-1.836-1.312-3.391-3.12-3.697-.403-.071-.795,.206-.864,.614-.069,.408,.206,.795,.614,.864Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default folderReplace;
