import type { iconProps } from './iconProps';

function folderBolt(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px folder bolt';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M10.776,15.33c-.396-.723-.365-1.603,.081-2.297l2.25-3.5c.414-.646,1.122-1.033,1.895-1.033,.327,0,.645,.07,.941,.207,.21,.097,.392,.23,.557,.379v-2.836c0-1.516-1.233-2.75-2.75-2.75h-5.026l-.378-.471c-.525-.654-1.307-1.029-2.145-1.029h-1.951c-1.517,0-2.75,1.234-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75h7.104c-.229-.183-.431-.404-.577-.67ZM3,6.314v-1.564c0-.689,.561-1.25,1.25-1.25h1.951c.381,0,.737,.17,.975,.467l.603,.752c.142,.177,.357,.281,.585,.281h5.386c.689,0,1.25,.561,1.25,1.25v.064c-.377-.194-.798-.314-1.25-.314H4.25c-.452,0-.873,.12-1.25,.314Z"
          fill="currentColor"
        />
        <path
          d="M16.75,13h-1.653l.62-2.031c.11-.358-.062-.742-.401-.9-.337-.155-.744-.041-.946,.275l-2.25,3.5c-.148,.231-.159,.524-.027,.765s.384,.391,.658,.391h1.653l-.62,2.031c-.11,.358,.062,.742,.401,.9,.102,.047,.209,.069,.315,.069,.248,0,.489-.124,.631-.344l2.25-3.5c.148-.231,.159-.524,.027-.765s-.384-.391-.658-.391Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default folderBolt;
