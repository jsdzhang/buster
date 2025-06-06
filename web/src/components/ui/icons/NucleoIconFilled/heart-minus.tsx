import type { iconProps } from './iconProps';

function heartMinus(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px heart minus';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M16.5,13.5h-5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill="currentColor"
        />
        <path
          d="M9.25,12.75c0-1.241,1.009-2.25,2.25-2.25h4.204c.628-1.134,1.046-2.428,1.046-3.888,.009-2.528-2.042-4.597-4.586-4.612-1.195,.015-2.324,.49-3.164,1.306-.84-.815-1.972-1.291-3.178-1.306-2.53,.015-4.582,2.084-4.572,4.609,0,5.253,5.306,8.429,6.932,9.278,.256,.133,.537,.2,.818,.2s.562-.067,.817-.2c.358-.187,.9-.493,1.519-.903-1.163-.085-2.087-1.049-2.087-2.233Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default heartMinus;
