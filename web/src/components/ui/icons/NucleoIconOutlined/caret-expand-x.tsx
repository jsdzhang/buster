import type { iconProps } from './iconProps';

function caretExpandX(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px caret expand x';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <path
          d="M14.999,8.586l-3.468-2.348c-.332-.225-.78,.013-.78,.414v4.696c0,.401,.448,.639,.78,.414l3.468-2.348c.293-.198,.293-.63,0-.828Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.001,8.586l3.468-2.348c.332-.225,.78,.013,.78,.414v4.696c0,.401-.448,.639-.78,.414l-3.468-2.348c-.293-.198-.293-.63,0-.828Z"
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

export default caretExpandX;
