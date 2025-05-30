import React from 'react';

import { iconProps } from './iconProps';

function keysLeftRight(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px keys left right';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M11.25,3.5H6.75c-1.24,0-2.25-1.009-2.25-2.25,0-.414,.336-.75,.75-.75s.75,.336,.75,.75,.337,.75,.75,.75h4.5c.413,0,.75-.336,.75-.75s.336-.75,.75-.75,.75,.336,.75,.75c0,1.241-1.01,2.25-2.25,2.25Z"
          fill="currentColor"
        />
        <path
          d="M12.75,17.5c-.414,0-.75-.336-.75-.75s-.337-.75-.75-.75H6.75c-.413,0-.75,.336-.75,.75s-.336,.75-.75,.75-.75-.336-.75-.75c0-1.241,1.01-2.25,2.25-2.25h4.5c1.24,0,2.25,1.009,2.25,2.25,0,.414-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M6.25,4.5H2.25c-1.24,0-2.25,1.009-2.25,2.25v4.5c0,1.241,1.01,2.25,2.25,2.25H6.25c1.24,0,2.25-1.009,2.25-2.25V6.75c0-1.241-1.01-2.25-2.25-2.25Zm-1.22,5.22c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22l-1.25-1.25c-.293-.293-.293-.768,0-1.061l1.25-1.25c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-.72,.72,.72,.72Z"
          fill="currentColor"
        />
        <path
          d="M15.75,4.5h-4c-1.24,0-2.25,1.009-2.25,2.25v4.5c0,1.241,1.01,2.25,2.25,2.25h4c1.24,0,2.25-1.009,2.25-2.25V6.75c0-1.241-1.01-2.25-2.25-2.25Zm-.47,5.03l-1.25,1.25c-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22c-.293-.293-.293-.768,0-1.061l.72-.72-.72-.72c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l1.25,1.25c.293,.293,.293,.768,0,1.061Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default keysLeftRight;
