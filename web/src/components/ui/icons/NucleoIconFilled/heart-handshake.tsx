import type { iconProps } from './iconProps';

function heartHandshake(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px heart handshake';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M8.999,16.087c-.28,0-.561-.067-.816-.2-1.626-.849-6.932-4.027-6.932-9.278-.01-2.524,2.041-4.593,4.571-4.609,1.537,.02,2.953,.787,3.801,2.053,.23,.344,.139,.81-.206,1.041-.344,.231-.81,.138-1.04-.206-.573-.856-1.53-1.375-2.56-1.388-1.69,.011-3.072,1.404-3.066,3.106,0,4.412,4.689,7.202,6.126,7.951,.08,.042,.166,.041,.246,0,.807-.421,2.847-1.597,4.348-3.416,.264-.32,.738-.363,1.056-.101,.319,.264,.364,.736,.101,1.056-1.615,1.958-3.707,3.215-4.811,3.791-.256,.133-.536,.2-.817,.2Z"
          fill="currentColor"
        />
        <path
          d="M12.163,2c-1.518,.019-2.928,.78-3.776,2.038l-2.822,3.807c-.237,.32-.183,.77,.124,1.024,1.062,.881,2.614,.761,3.528-.28l.878-1,3.354,4.479c.138,.184,.354,.295,.583,.3h.018c.224,0,.437-.1,.579-.273,1.407-1.708,2.121-3.555,2.121-5.484,.01-2.527-2.041-4.596-4.586-4.612Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default heartHandshake;
