import type { iconProps } from './iconProps';

function folderKey(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px folder key';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M8.5,15.75c0-2.068,1.682-3.75,3.75-3.75,1.192,0,2.293,.574,2.989,1.5h1.236c.008-.083,.025-.164,.025-.25V6.25c0-1.516-1.233-2.75-2.75-2.75h-5.026l-.378-.471c-.525-.654-1.307-1.029-2.145-1.029h-1.951c-1.517,0-2.75,1.234-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75h4.275c-.006-.084-.025-.164-.025-.25ZM3,6.314v-1.564c0-.689,.561-1.25,1.25-1.25h1.951c.381,0,.737,.17,.975,.467l.603,.752c.142,.177,.357,.281,.585,.281h5.386c.689,0,1.25,.561,1.25,1.25v.064c-.377-.194-.798-.314-1.25-.314H4.25c-.452,0-.873,.12-1.25,.314Z"
          fill="currentColor"
        />
        <path
          d="M17.25,15h-2.888c-.311-.871-1.135-1.5-2.112-1.5-1.241,0-2.25,1.009-2.25,2.25s1.009,2.25,2.25,2.25c.976,0,1.801-.629,2.112-1.5h1.138v.5c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-.5h.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Zm-5,1.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75,.75,.336,.75,.75-.336,.75-.75,.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default folderKey;
