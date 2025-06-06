import type { iconProps } from './iconProps';

function ambulance(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px ambulance';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M7,1c-.827,0-1.5,.673-1.5,1.5v1.25c0,.414,.336,.75,.75,.75h1.5c.414,0,.75-.336,.75-.75v-1.25c0-.827-.673-1.5-1.5-1.5Z"
          fill="currentColor"
        />
        <path
          d="M17.722,8.597l-1.796-2.794c-.324-.503-.874-.803-1.472-.803h-1.558c-.327-1.153-1.39-2-2.646-2H3.25c-1.517,0-2.75,1.233-2.75,2.75v6c0,1.448,1.128,2.625,2.564,2.729-.038-.154-.064-.313-.064-.479,0-1.104,.895-2,2-2s2,.896,2,2c0,.174-.029,.339-.071,.5h3.391c-.042-.161-.071-.326-.071-.5,0-1.104,.895-2,2-2s2,.896,2,2c0,.174-.029,.339-.071,.5h1.071c1.517,0,2.75-1.233,2.75-2.75v-2.206c0-.337-.097-.665-.278-.947Zm-8.972,.403h-1.25v1.25c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-1.25h-1.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1.25v-1.25c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1.25h1.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm4.25-.5v-2h1.454c.085,0,.164,.043,.21,.115l1.212,1.885h-2.876Z"
          fill="currentColor"
        />
        <path
          d="M5,16.5c-1.378,0-2.5-1.122-2.5-2.5s1.122-2.5,2.5-2.5,2.5,1.122,2.5,2.5-1.122,2.5-2.5,2.5Zm0-3.5c-.551,0-1,.449-1,1s.449,1,1,1,1-.449,1-1-.449-1-1-1Z"
          fill="currentColor"
        />
        <path
          d="M12.25,16.5c-1.378,0-2.5-1.122-2.5-2.5s1.122-2.5,2.5-2.5,2.5,1.122,2.5,2.5-1.122,2.5-2.5,2.5Zm0-3.5c-.551,0-1,.449-1,1s.449,1,1,1,1-.449,1-1-.449-1-1-1Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default ambulance;
