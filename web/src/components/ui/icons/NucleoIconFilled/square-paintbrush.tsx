import React from 'react';

import { iconProps } from './iconProps';

function squarePaintbrush(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px square paintbrush';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M12.75,16.5H4.25c-1.517,0-2.75-1.233-2.75-2.75V5.25c0-1.517,1.233-2.75,2.75-2.75h5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75H4.25c-.689,0-1.25,.561-1.25,1.25V13.75c0,.689,.561,1.25,1.25,1.25H12.75c.689,0,1.25-.561,1.25-1.25v-5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v5c0,1.517-1.233,2.75-2.75,2.75Z"
          fill="currentColor"
        />
        <path
          d="M16.37,1.635c-.29-.29-.677-.45-1.088-.45s-.798,.16-1.088,.45l-3.79,3.792c.472,.22,.913,.511,1.292,.891,.382,.383,.664,.824,.878,1.289l3.797-3.795c.6-.6,.6-1.577,0-2.177Z"
          fill="currentColor"
        />
        <path
          d="M10.632,7.377c-.563-.565-1.31-.877-2.101-.877h-.006c-.789,.001-1.531,.313-2.09,.879-.795,.804-.933,1.605-1.043,2.25-.12,.698-.186,1.082-1.002,1.528-.265,.145-.417,.436-.386,.736,.032,.301,.241,.553,.53,.64,.862,.259,1.779,.472,2.694,.472,1.182,0,2.359-.355,3.404-1.425,1.155-1.159,1.155-3.044,0-4.203Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default squarePaintbrush;
