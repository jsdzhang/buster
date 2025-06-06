import type { iconProps } from './iconProps';

function calendarPhone(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px calendar phone';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M13.75,2h-.75V.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v1.25H6.5V.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v1.25h-.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75h4.636c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H4.25c-.689,0-1.25-.561-1.25-1.25V7H15v4.446c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V4.75c0-1.517-1.233-2.75-2.75-2.75Z"
          fill="currentColor"
        />
        <path
          d="M16.235,13.5l-.859-.349c-.52-.23-1.129-.083-1.467,.34l-1.008,1.169c-.624-.404-1.157-.937-1.562-1.561l1.15-.992c.441-.354,.59-.963,.369-1.461l-.368-.903c-.248-.563-.868-.857-1.501-.69l-1.112,.365c-.543,.179-.899,.697-.864,1.262,.213,3.382,2.924,6.093,6.307,6.306,.025,.001,.052,.002,.077,.002,.533,0,1.014-.348,1.185-.867l.378-1.156c.155-.595-.141-1.208-.725-1.466Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default calendarPhone;
