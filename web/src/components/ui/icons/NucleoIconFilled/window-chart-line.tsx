import type { iconProps } from './iconProps';

function windowChartLine(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px window chart line';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M14.25,2H3.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75H14.25c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Zm-7.25,2c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Zm-4,1c0-.552,.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm10.921,1.085l-2.25,4.5c-.123,.245-.369,.403-.642,.414-.277,.012-.531-.129-.672-.364l-.841-1.402-1.364,2.388c-.124,.216-.345,.356-.593,.375-.247,.018-.489-.085-.644-.279l-.44-.55-1.16,1.325c-.148,.169-.356,.256-.565,.256-.175,0-.351-.061-.493-.186-.312-.273-.344-.747-.071-1.058l1.75-2c.146-.167,.356-.25,.581-.256,.222,.005,.43,.108,.569,.281l.311,.389,1.452-2.542c.132-.231,.377-.375,.644-.378,.245,0,.514,.136,.651,.364l.797,1.328,1.639-3.278c.186-.37,.636-.52,1.006-.335,.371,.186,.521,.636,.335,1.006v.002Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default windowChartLine;
