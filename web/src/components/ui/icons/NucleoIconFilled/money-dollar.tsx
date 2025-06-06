import type { iconProps } from './iconProps';

function moneyDollar(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px money dollar';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M9.124,8.254c-.491-.087-.751-.244-.772-.465-.016-.168,.033-.222,.057-.248,.127-.14,.442-.215,.621-.215,.419,0,.549,.21,.598,.289,.22,.352,.684,.46,1.032,.243,.353-.218,.461-.681,.243-1.033-.274-.442-.68-.736-1.164-.884-.032-.385-.345-.691-.738-.691-.398,0-.717,.313-.741,.706-.347,.108-.698,.286-.962,.577-.339,.374-.49,.858-.438,1.4,.053,.547,.384,1.509,2.001,1.797,.899,.161,.905,.396,.908,.521,.003,.113-.033,.205-.114,.288-.135,.139-.368,.221-.625,.221-.609,0-.727-.233-.777-.333-.187-.368-.637-.519-1.008-.33-.369,.187-.518,.638-.33,1.008,.207,.409,.61,.876,1.371,1.065,.079,.329,.362,.579,.715,.579,.358,0,.644-.257,.718-.593,.39-.108,.743-.297,1.009-.57,.361-.37,.554-.857,.541-1.373-.026-1.052-.748-1.712-2.145-1.961Z"
          fill="currentColor"
        />
        <path
          d="M14.25,3H3.75c-1.517,0-2.75,1.233-2.75,2.75v6.5c0,1.517,1.233,2.75,2.75,2.75H14.25c1.517,0,2.75-1.233,2.75-2.75V5.75c0-1.517-1.233-2.75-2.75-2.75Zm-1.608,10.5H5.358c-.364-1.399-1.459-2.494-2.858-2.858v-3.284c1.399-.364,2.494-1.459,2.858-2.858h7.284c.364,1.399,1.459,2.494,2.858,2.858v3.284c-1.399,.364-2.494,1.459-2.858,2.858Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default moneyDollar;
