import React from 'react';

import { iconProps } from './iconProps';

function vShapedArrowUp(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px v shaped arrow up';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <path
          d="M2.75 10.5L9 6.25 15.25 10.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default vShapedArrowUp;
