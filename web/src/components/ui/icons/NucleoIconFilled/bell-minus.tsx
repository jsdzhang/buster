import type { iconProps } from './iconProps';

function bellMinus(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px bell minus';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M10.588,15.185c-.095-.117-.237-.185-.388-.185h-2.399c-.151,0-.293,.068-.388,.185-.095,.117-.132,.271-.101,.418,.173,.822,.868,1.397,1.689,1.397s1.516-.575,1.689-1.397c.031-.147-.006-.301-.101-.418Z"
          fill="currentColor"
        />
        <path
          d="M15.75,12.5c-.689,0-1.25-.561-1.25-1.25V6.5c0-.169-.01-.335-.025-.5h-3.225c-1.241,0-2.25-1.009-2.25-2.25s1.009-2.25,2.25-2.25h.028c-.695-.318-1.465-.5-2.278-.5C5.967,1,3.5,3.467,3.5,6.5v4.75c0,.689-.561,1.25-1.25,1.25-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H15.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill="currentColor"
        />
        <path
          d="M16.25,4.5h-5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default bellMinus;
