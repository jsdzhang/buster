import type { iconProps } from './iconProps';

function office2(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px office 2';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M5.25,17H3.25c-.965,0-1.75-.785-1.75-1.75v-5.5c0-.965,.785-1.75,1.75-1.75h2c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75H3.25c-.138,0-.25,.112-.25,.25v5.5c0,.138,.112,.25,.25,.25h2c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M14.25,17h-2.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2.5c.138,0,.25-.112,.25-.25V4.767c0-.081-.04-.157-.105-.204L10.395,1.729c-.108-.077-.209-.044-.259-.018-.051,.026-.135,.09-.135,.222V6.245c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75V1.934c0-.657,.362-1.252,.946-1.554,.584-.302,1.28-.252,1.816,.126l4,2.834c.462,.327,.738,.861,.738,1.428V15.25c0,.965-.785,1.75-1.75,1.75Z"
          fill="currentColor"
        />
        <path
          d="M10.75,5.5H6.25c-.965,0-1.75,.785-1.75,1.75v9c0,.414,.336,.75,.75,.75h6.5c.414,0,.75-.336,.75-.75V7.25c0-.965-.785-1.75-1.75-1.75Zm-1.5,9h-1.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm0-2.5h-1.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm0-2.5h-1.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default office2;
