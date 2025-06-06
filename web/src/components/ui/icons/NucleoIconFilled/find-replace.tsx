import type { iconProps } from './iconProps';

function findReplace(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px find replace';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M6.25,15.5h-1c-.954,0-1.73-.769-1.747-1.719l.177,.207c.148,.173,.358,.262,.57,.262,.172,0,.346-.06,.488-.181,.314-.27,.351-.743,.081-1.058l-1.5-1.75c-.285-.332-.854-.332-1.139,0l-1.5,1.75c-.27,.314-.233,.788,.081,1.058,.314,.27,.787,.233,1.058-.081l.183-.214c.014,1.78,1.464,3.225,3.247,3.225h1c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill="currentColor"
        />
        <path
          d="M17.238,3.931c-.315-.271-.788-.233-1.058,.081l-.183,.214c-.014-1.78-1.464-3.225-3.247-3.225h-1c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h1c.954,0,1.73,.769,1.747,1.719l-.177-.207c-.27-.314-.743-.351-1.058-.081-.314,.27-.351,.743-.081,1.058l1.5,1.75c.143,.166,.351,.262,.569,.262s.427-.096,.569-.262l1.5-1.75c.27-.314,.233-.788-.081-1.058Z"
          fill="currentColor"
        />
        <path
          d="M5.75,10.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75c-1.792,0-3.25-1.458-3.25-3.25s1.458-3.25,3.25-3.25,3.25,1.458,3.25,3.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75c0-2.619-2.131-4.75-4.75-4.75S1,3.131,1,5.75s2.131,4.75,4.75,4.75Z"
          fill="currentColor"
        />
        <rect height="9" width="9" fill="currentColor" rx="2.25" ry="2.25" x="8" y="8" />
      </g>
    </svg>
  );
}

export default findReplace;
