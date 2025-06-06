import type { iconProps } from './iconProps';

function folderStar(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px folder star';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M9.957,15.798l-.777-.758c-.61-.595-.833-1.502-.568-2.31,.265-.817,.961-1.404,1.816-1.528l1.074-.156,.479-.974c.374-.754,1.147-1.22,2.019-1.22s1.645,.466,2.017,1.217l.481,.977h.002s0-2.296,0-2.296v-2.5c0-1.516-1.233-2.75-2.75-2.75h-5.026l-.378-.471c-.525-.654-1.307-1.029-2.145-1.029h-1.951c-1.517,0-2.75,1.234-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75h5.673l.034-.202ZM3,6.314v-1.564c0-.689,.561-1.25,1.25-1.25h1.951c.381,0,.737,.17,.975,.467l.603,.752c.142,.177,.357,.281,.585,.281h5.386c.689,0,1.25,.561,1.25,1.25v.064c-.377-.194-.798-.314-1.25-.314H4.25c-.452,0-.873,.12-1.25,.314Z"
          fill="currentColor"
        />
        <path
          d="M17.357,12.687l-1.855-.27-.829-1.681c-.254-.512-1.092-.512-1.346,0l-.829,1.681-1.855,.27c-.283,.041-.518,.239-.605,.51-.089,.271-.015,.57,.189,.769l1.343,1.309-.317,1.848c-.048,.282,.067,.566,.299,.734,.229,.167,.537,.189,.789,.057l1.66-.873,1.66,.873c.109,.058,.229,.086,.349,.086,.155,0,.311-.048,.44-.143,.231-.168,.347-.452,.299-.734l-.317-1.848,1.343-1.309c.204-.199,.278-.498,.189-.769-.088-.271-.322-.469-.605-.51Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default folderStar;
