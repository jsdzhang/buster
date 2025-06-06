import type { iconProps } from './iconProps';

function boxCheck(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px box check';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M8.25,1.5h-2.009c-1.052,0-1.996,.586-2.464,1.529l-.348,.703c.418-.138,.857-.231,1.321-.231h3.5V1.5Z"
          fill="currentColor"
        />
        <path
          d="M14.223,3.028c-.468-.942-1.412-1.528-2.464-1.528h-2.009V3.5h3.5c.464,0,.903,.093,1.322,.231l-.348-.703Z"
          fill="currentColor"
        />
        <path
          d="M9.597,13.966c.421-.454,1.022-.716,1.646-.716,.473,0,.927,.146,1.306,.417l1.905-2.523c.372-.492,.939-.795,1.546-.865v-2.53c0-1.517-1.233-2.75-2.75-2.75h-3.5v2.75c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-2.75h-3.5c-1.517,0-2.75,1.233-2.75,2.75v5.5c0,1.517,1.233,2.75,2.75,2.75h4.301c-.159-.703,.019-1.469,.545-2.034Z"
          fill="currentColor"
        />
        <path
          d="M12.853,17.75c-.189,0-.372-.071-.512-.201l-1.609-1.5c-.303-.283-.319-.757-.037-1.06,.282-.305,.759-.319,1.061-.038l1,.933,2.896-3.836c.249-.33,.719-.396,1.051-.146,.33,.25,.396,.72,.146,1.051l-3.397,4.5c-.128,.169-.322,.276-.533,.295-.022,.002-.044,.003-.065,.003Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default boxCheck;
