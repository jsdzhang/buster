import type { iconProps } from './iconProps';

function soccerGoal2(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px soccer goal 2';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="m16.536,5.465c-.944-.944-2.2-1.465-3.536-1.465s-2.591.521-3.536,1.465-1.464,2.199-1.464,3.535.52,2.591,1.464,3.535,2.2,1.465,3.536,1.465,2.591-.521,3.536-1.465,1.464-2.199,1.464-3.535-.52-2.591-1.464-3.535Zm-3.007,6.953l-.255-.307.176-.988c.005-.028-.004-.054-.002-.082l.974-.488c.023.015.038.036.062.049l.869.44.112.441c-.531.527-1.219.832-1.937.936Zm-3.639-3.691l-.336-.279c.114-.72.44-1.387.964-1.914l.44.112.44.869c.012.024.037.034.052.056l-.492.981c-.028.002-.054-.007-.082-.002l-.986.177Zm6.144.978l-.872-.441c-.022-.011-.045-.01-.068-.019l-.177-1.121c.019-.016.042-.022.06-.04l.692-.692.438.028c.247.485.393,1.019.393,1.58,0,.183-.025.362-.053.54l-.413.165Zm-1.455-3.812l.029.44-.691.691c-.018.018-.025.041-.04.061l-1.122-.178c-.009-.023-.008-.046-.019-.068l-.441-.871.165-.414c.178-.028.357-.053.54-.053.56,0,1.094.145,1.579.392Zm-4.683,4.693l.24-.38,1.004-.18c.02-.004.035-.016.054-.021l.8.8c-.005.019-.018.034-.022.054l-.179,1.005-.365.231c-.328-.159-.639-.356-.904-.62-.263-.263-.464-.567-.629-.889Z"
          fill="currentColor"
          strokeWidth="0"
        />
        <path
          d="m17.744,1.491l-.946-.315-.316-.947c-.102-.306-.609-.306-.711,0l-.316.947-.946.315c-.153.051-.257.194-.257.356s.104.305.257.356l.946.315.316.947c.051.153.194.256.355.256s.305-.104.355-.256l.316-.947.946-.315c.153-.051.257-.194.257-.356s-.104-.305-.257-.356h.001Z"
          fill="currentColor"
          strokeWidth="0"
        />
        <path
          d="m9.727,14.202c-.103-.401-.512-.641-.913-.54l-4.061,1.042c.613-.997,1.085-1.999,1.374-2.996.116-.397-.113-.813-.511-.93-.398-.11-.813.113-.929.512-.381,1.311-1.108,2.649-2.145,3.981l-.978.251c-.401.104-.643.512-.54.913.087.339.392.563.726.563.062,0,.125-.008.187-.023l7.25-1.861c.401-.104.643-.512.54-.913Z"
          fill="currentColor"
          strokeWidth="0"
        />
        <path
          d="m9.187,2.885L1.937,1.023c-.403-.103-.811.139-.913.54-.103.401.139.81.54.913l.981.252c1.639,2.097,2.477,4.204,2.477,6.267,0,.414.335.75.75.75s.75-.336.75-.75c0-1.901-.591-3.81-1.75-5.695l4.042,1.038c.062.016.125.023.187.023.334,0,.639-.225.726-.563.103-.401-.139-.81-.54-.913Z"
          fill="currentColor"
          strokeWidth="0"
        />
        <path
          d="m6.25,9.75H.75c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h5.5c.414,0,.75.336.75.75s-.336.75-.75.75Z"
          fill="currentColor"
          strokeWidth="0"
        />
        <circle cx="15.25" cy="15.75" fill="currentColor" r=".75" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default soccerGoal2;
