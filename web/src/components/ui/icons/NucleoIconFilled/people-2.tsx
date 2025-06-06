import type { iconProps } from './iconProps';

function people2(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px people 2';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <circle cx="4.37" cy="2.5" fill="currentColor" r="2.5" />
        <circle cx="13.632" cy="2.5" fill="currentColor" r="2.5" />
        <path
          d="M7.261,7.331c-.197-.628-.728-1.089-1.382-1.202-.506-.088-1.009-.137-1.501-.125-.504-.013-1.011,.037-1.516,.125-.655,.113-1.186,.574-1.383,1.202L.311,11.034c-.103,.325-.07,.669,.091,.969,.161,.3,.43,.517,.757,.61l.739,.211,.176,3.515c.048,.932,.815,1.662,1.748,1.662h1.098c.933,0,1.7-.73,1.748-1.663l.176-3.514,.739-.211c.326-.093,.595-.309,.757-.608,.161-.299,.194-.643,.092-.97l-1.17-3.703Z"
          fill="currentColor"
        />
        <path
          d="M17.691,11.034l-1.17-3.703c-.197-.628-.727-1.089-1.381-1.202-.508-.089-1.021-.137-1.501-.125-.506-.013-1.011,.037-1.517,.125-.655,.113-1.185,.574-1.382,1.202l-1.17,3.704c-.104,.325-.07,.669,.091,.969,.161,.3,.431,.517,.758,.609l.739,.211,.176,3.513c.046,.933,.814,1.663,1.748,1.663h1.097c.934,0,1.702-.73,1.748-1.663l.176-3.514,.74-.211c.327-.093,.596-.31,.757-.61,.161-.3,.193-.644,.091-.969Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default people2;
