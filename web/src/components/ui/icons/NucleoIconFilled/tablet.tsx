import React from 'react';

import { iconProps } from './iconProps';

function tablet(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px tablet';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M13.25,17H4.75c-1.517,0-2.75-1.233-2.75-2.75V3.75c0-1.517,1.233-2.75,2.75-2.75H13.25c1.517,0,2.75,1.233,2.75,2.75V14.25c0,1.517-1.233,2.75-2.75,2.75ZM4.75,2.5c-.689,0-1.25,.561-1.25,1.25V14.25c0,.689,.561,1.25,1.25,1.25H13.25c.689,0,1.25-.561,1.25-1.25V3.75c0-.689-.561-1.25-1.25-1.25H4.75Z"
          fill="currentColor"
        />
        <path
          d="M10.25,5h-2.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default tablet;
