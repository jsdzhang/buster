import React from 'react';

import { iconProps } from './iconProps';

function listFavs2(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px list favs 2';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M15.75,8.25h-7.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h7.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill="currentColor"
        />
        <path
          d="M8.25,4.5h7.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-7.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M15.75,13.5h-7.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h7.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill="currentColor"
        />
        <path
          d="M5.804,7.93l-1.187-.172-.531-1.076c-.125-.256-.547-.256-.672,0l-.531,1.076-1.187,.172c-.142,.021-.259,.12-.303,.255s-.008,.285,.095,.384l.858,.837-.202,1.182c-.024,.141,.033,.283,.148,.367,.115,.084,.269,.096,.396,.029l1.062-.558,1.062,.558c.056,.029,.115,.043,.175,.043,.078,0,.155-.024,.221-.072,.115-.084,.173-.226,.148-.367l-.202-1.182,.858-.837c.103-.1,.139-.249,.095-.384s-.161-.235-.303-.255Z"
          fill="currentColor"
        />
        <path
          d="M5.804,2.68l-1.187-.172-.531-1.076c-.125-.256-.547-.256-.672,0l-.531,1.076-1.187,.172c-.142,.021-.259,.12-.303,.255s-.008,.285,.095,.384l.858,.837-.202,1.182c-.024,.141,.033,.283,.148,.367s.269,.096,.396,.029l1.062-.558,1.062,.558c.056,.029,.115,.043,.175,.043,.078,0,.155-.024,.221-.072,.115-.084,.173-.226,.148-.367l-.202-1.182,.858-.837c.103-.1,.139-.249,.095-.384s-.161-.235-.303-.255Z"
          fill="currentColor"
        />
        <path
          d="M5.804,13.18l-1.187-.172-.531-1.076c-.125-.256-.547-.256-.672,0l-.531,1.076-1.187,.172c-.142,.021-.259,.12-.303,.255s-.008,.285,.095,.384l.858,.837-.202,1.182c-.024,.141,.033,.283,.148,.367,.115,.084,.269,.095,.396,.029l1.062-.558,1.062,.558c.056,.029,.115,.043,.175,.043,.078,0,.155-.024,.221-.072,.115-.084,.173-.226,.148-.367l-.202-1.182,.858-.837c.103-.1,.139-.249,.095-.384s-.161-.235-.303-.255Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default listFavs2;
