import type { iconProps } from './iconProps';

function squareBracketsCurly(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px square brackets curly';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M13.25,2H4.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75H13.25c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75ZM7,10.961v.789c0,.138,.112,.25,.25,.25,.414,0,.75,.336,.75,.75s-.336,.75-.75,.75c-.965,0-1.75-.785-1.75-1.75v-.789c0-.382-.171-.738-.47-.977l-.499-.399c-.178-.142-.281-.358-.281-.585s.104-.443,.281-.585l.499-.399c.299-.239,.47-.595,.47-.977v-.789c0-.965,.785-1.75,1.75-1.75,.414,0,.75,.336,.75,.75s-.336,.75-.75,.75c-.138,0-.25,.112-.25,.25v.789c0,.746-.297,1.446-.822,1.961,.525,.515,.822,1.216,.822,1.961Zm6.469-1.376l-.499,.399c-.299,.239-.47,.595-.47,.977v.789c0,.965-.785,1.75-1.75,1.75-.414,0-.75-.336-.75-.75s.336-.75,.75-.75c.138,0,.25-.112,.25-.25v-.789c0-.746,.297-1.446,.822-1.961-.525-.515-.822-1.216-.822-1.961v-.789c0-.138-.112-.25-.25-.25-.414,0-.75-.336-.75-.75s.336-.75,.75-.75c.965,0,1.75,.785,1.75,1.75v.789c0,.382,.171,.738,.47,.977l.499,.399c.178,.142,.281,.358,.281,.585s-.104,.443-.281,.585Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default squareBracketsCurly;
