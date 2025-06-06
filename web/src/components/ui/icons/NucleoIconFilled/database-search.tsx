import type { iconProps } from './iconProps';

function databaseSearch(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px database search';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M10.106,10.463c-.358,.024-.729,.037-1.106,.037-3.572,0-5.5-1.064-5.5-1.5v-2.806c1.369,.715,3.478,1.056,5.5,1.056s4.131-.341,5.5-1.056v3.224c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V4.25c0-2.061-3.629-3-7-3s-7,.939-7,3V13.75c0,2.061,3.629,3,7,3,.241,0,.48-.004,.716-.014,.414-.016,.736-.365,.72-.779-.016-.415-.39-.73-.778-.72-.216,.008-.436,.013-.657,.013-3.572,0-5.5-1.064-5.5-1.5v-2.806c1.369,.715,3.478,1.056,5.5,1.056,.413,0,.816-.014,1.208-.041,.413-.028,.726-.385,.697-.799-.027-.414-.384-.725-.799-.697Z"
          fill="currentColor"
        />
        <path
          d="M16.575,15.514c.263-.446,.425-.96,.425-1.514,0-1.654-1.346-3-3-3s-3,1.346-3,3,1.346,3,3,3c.555,0,1.068-.162,1.514-.425l1.205,1.205c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-1.205-1.205Zm-4.075-1.514c0-.827,.673-1.5,1.5-1.5s1.5,.673,1.5,1.5c0,.413-.168,.787-.438,1.058,0,0-.002,0-.002,.002s0,.002-.002,.002c-.271,.271-.645,.438-1.058,.438-.827,0-1.5-.673-1.5-1.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default databaseSearch;
