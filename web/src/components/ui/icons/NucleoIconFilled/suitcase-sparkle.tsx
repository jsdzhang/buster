import React from 'react';

import { iconProps } from './iconProps';

function suitcaseSparkle(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px suitcase sparkle';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M11.75,5.5c-.414,0-.75-.336-.75-.75V2.25c0-.138-.112-.25-.25-.25h-3.5c-.138,0-.25,.112-.25,.25v2.5c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75V2.25c0-.965,.785-1.75,1.75-1.75h3.5c.965,0,1.75,.785,1.75,1.75v2.5c0,.414-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M9,14.25c0-.859,.478-1.631,1.246-2.014l1.327-.664,.664-1.329c.373-.747,1.145-1.21,2.013-1.21s1.64,.464,2.013,1.21l.664,1.329,.073,.037V6.75c0-1.517-1.233-2.75-2.75-2.75H3.75c-1.517,0-2.75,1.233-2.75,2.75v6.5c0,1.517,1.233,2.75,2.75,2.75h6.111c-.532-.42-.861-1.05-.861-1.75Z"
          fill="currentColor"
        />
        <path
          d="M17.585,13.579l-1.776-.888-.888-1.776c-.254-.508-1.088-.508-1.342,0l-.888,1.776-1.776,.888c-.255,.127-.415,.387-.415,.671s.16,.544,.415,.671l1.776,.888,.888,1.776c.127,.254,.387,.415,.671,.415s.544-.161,.671-.415l.888-1.776,1.776-.888c.255-.127,.415-.387,.415-.671s-.16-.544-.415-.671Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default suitcaseSparkle;
