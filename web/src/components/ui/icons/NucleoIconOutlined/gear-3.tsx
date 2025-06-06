import type { iconProps } from './iconProps';

function gear3(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px gear 3';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <circle
          cx="9"
          cy="8.999"
          fill="currentColor"
          r="1.75"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.175,7.278l-.929-.328c-.102-.261-.219-.52-.363-.77s-.31-.48-.485-.699l.18-.968c.125-.671-.187-1.349-.778-1.69l-.351-.203c-.592-.342-1.334-.273-1.853.171l-.745.637c-.56-.086-1.133-.086-1.703,0l-.745-.638c-.519-.444-1.262-.513-1.853-.171l-.351.203c-.592.341-.903,1.019-.778,1.69l.18.965c-.36.449-.646.946-.852,1.474l-.924.326c-.644.227-1.075.836-1.075,1.519v.405c0,.683.431,1.292,1.075,1.519l.929.328c.102.261.218.519.363.769s.31.48.485.7l-.181.968c-.125.671.187,1.349.778,1.69l.351.203c.592.342,1.334.273,1.853-.171l.745-.638c.559.086,1.132.086,1.701,0l.746.639c.519.444,1.262.513,1.853.171l.351-.203c.592-.342.903-1.019.778-1.69l-.18-.966c.359-.449.646-.945.851-1.473l.925-.326c.644-.227,1.075-.836,1.075-1.519v-.405c0-.683-.431-1.292-1.075-1.519h.002Z"
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

export default gear3;
