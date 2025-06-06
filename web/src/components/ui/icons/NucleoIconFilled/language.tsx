import type { iconProps } from './iconProps';

function language(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px language';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M8.553,10.658c.066,.018,.132,.026,.197,.026,.33,0,.632-.219,.723-.553,.109-.399-.127-.812-.527-.92-.579-.158-1.112-.406-1.589-.726,.751-.872,1.329-2.015,1.555-3.485h1.338c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-3.25v-1.25c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v1.25H2.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h1.333c.183,1.308,.721,2.5,1.542,3.469-1.361,.896-2.817,1.025-2.926,1.033-.413,.028-.726,.385-.698,.799,.027,.396,.356,.7,.748,.7,.017,0,.034,0,.051-.001,1.06-.071,2.604-.492,3.946-1.484,.679,.507,1.448,.909,2.307,1.143Zm-1.158-5.658c-.199,1.053-.624,1.858-1.148,2.477-.587-.701-.992-1.547-1.159-2.477h2.307Z"
          fill="currentColor"
        />
        <path
          d="M16.452,15.487l-3-8c-.11-.293-.39-.487-.702-.487h-.5c-.312,0-.592,.194-.702,.487l-3,8c-.146,.388,.051,.82,.439,.965,.386,.145,.82-.051,.965-.439l.755-2.013h3.586l.755,2.013c.113,.301,.398,.487,.702,.487,.087,0,.177-.015,.263-.048,.388-.146,.584-.578,.439-.965Zm-5.182-2.987l1.23-3.281,1.23,3.281h-2.461Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default language;
