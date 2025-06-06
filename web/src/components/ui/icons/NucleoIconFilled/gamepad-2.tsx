import type { iconProps } from './iconProps';

function gamepad2(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px gamepad 2';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M9,5.5c-.414,0-.75-.336-.75-.75v-.75c0-1.378,1.121-2.5,2.5-2.5h1.75c.439,0,.834-.294,.959-.714,.118-.397,.527-.625,.934-.504,.396,.119,.622,.536,.504,.933-.313,1.051-1.299,1.786-2.396,1.786h-1.75c-.552,0-1,.449-1,1v.75c0,.414-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M17.632,12.77l-1.99-6.793c-.342-1.164-1.427-1.977-2.64-1.977H4.998c-1.213,0-2.298,.812-2.64,1.977L.37,12.764c-.081,.259-.12,.5-.12,.736,0,1.378,1.121,2.5,2.5,2.5,.797,0,1.553-.388,2.024-1.041l1.048-1.459h6.355l1.049,1.461c.471,.651,1.227,1.039,2.023,1.039,1.379,0,2.5-1.122,2.5-2.5,0-.234-.038-.473-.118-.73Zm-10.132-3.27h-.5v.5c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-.5h-.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h.5v-.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v.5h.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm3.25,1c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75,.75,.336,.75,.75-.336,.75-.75,.75Zm1.5-2c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75,.75,.336,.75,.75-.336,.75-.75,.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default gamepad2;
