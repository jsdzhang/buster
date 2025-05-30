import React from 'react';

import { iconProps } from './iconProps';

function quote(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px quote';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M15.25,15H2.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H15.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M15.25,11.5H2.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H15.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M15.25,8h-3c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h3c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M15.25,4.5h-3c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h3c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M4.75,5h-1.202c.151-1.066,.645-1.355,1.147-1.551,.387-.15,.578-.585,.428-.971s-.589-.575-.971-.427c-1.469,.571-2.152,1.747-2.152,3.699v1.5c0,.414,.336,.75,.75,.75h2c.414,0,.75-.336,.75-.75v-1.5c0-.414-.336-.75-.75-.75Z"
          fill="currentColor"
        />
        <path
          d="M9.25,5h-1.202c.151-1.066,.645-1.355,1.147-1.551,.387-.15,.578-.585,.428-.971-.149-.386-.588-.575-.971-.427-1.469,.571-2.152,1.747-2.152,3.699v1.5c0,.414,.336,.75,.75,.75h2c.414,0,.75-.336,.75-.75v-1.5c0-.414-.336-.75-.75-.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default quote;
