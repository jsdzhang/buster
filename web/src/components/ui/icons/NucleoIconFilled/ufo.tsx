import type { iconProps } from './iconProps';

function ufo(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px ufo';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <circle cx="14.75" cy="1.75" fill="currentColor" r=".75" />
        <path
          d="M3.869,1.894l-.947-.315-.315-.947c-.103-.306-.609-.306-.712,0l-.315,.947-.947,.315c-.153,.051-.256,.194-.256,.356s.104,.305,.256,.356l.947,.315,.315,.947c.051,.153,.194,.256,.356,.256s.305-.104,.356-.256l.315-.947,.947-.315c.153-.051,.256-.194,.256-.356s-.104-.305-.256-.356Z"
          fill="currentColor"
        />
        <path
          d="M17.054,5.256c-.232-1.36-2.349-1.747-4.612-1.721-.653-1.501-2.143-2.51-3.817-2.51-2.234,0-4.048,1.771-4.148,3.981-.323,.123-.638,.249-.921,.382-1.666,.783-2.431,1.646-2.274,2.563,.243,1.424,2.511,1.73,4.41,1.73,.435,0,.85-.016,1.218-.039,.414-.025,.728-.38,.703-.794s-.374-.738-.794-.703c-2.479,.149-3.737-.22-4.029-.453,.282-.469,2.244-1.66,6.166-2.329,3.921-.671,6.169-.198,6.59,.151-.211,.345-1.4,1.18-4.097,1.887-.401,.105-.641,.515-.536,.916,.104,.4,.516,.638,.916,.536,1.681-.44,5.554-1.672,5.225-3.595Z"
          fill="currentColor"
        />
        <path
          d="M16.902,15.88L11.675,6.67c-.289-.551-1.074-.692-2.856-.38-2.016,.352-2.313,.776-2.411,.916-.07,.1-.13,.266-.146,.396l-1.006,8.561c-.049,.411,.246,.784,.657,.832,.03,.004,.059,.005,.088,.005,.375,0,.699-.281,.744-.663l.915-7.781c.366-.005,.856-.048,1.527-.166,.57-.1,1.21-.275,1.529-.374l4.883,8.604c.138,.244,.392,.38,.653,.38,.125,0,.253-.031,.37-.098,.36-.205,.487-.662,.282-1.022Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default ufo;
