import type { iconProps } from './iconProps';

function microphoneSlash(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px microphone slash';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M6.721,11.279l6.279-6.279c0-2.206-1.794-4-4-4s-4,1.794-4,4v3c0,1.358,.683,2.556,1.721,3.279Z"
          fill="currentColor"
        />
        <path
          d="M9.202,11.979c2.042-.104,3.673-1.736,3.777-3.777l-3.777,3.777Z"
          fill="currentColor"
        />
        <path
          d="M4.583,13.417l1.066-1.066c-1.304-1.006-2.149-2.58-2.149-4.351,0-.414-.336-.75-.75-.75s-.75,.336-.75,.75c0,2.185,1.01,4.133,2.583,5.417Z"
          fill="currentColor"
        />
        <path
          d="M15.25,7.25c-.414,0-.75,.336-.75,.75,0,3.033-2.467,5.5-5.5,5.5-.408,0-.804-.048-1.186-.132l-1.203,1.203c.521,.19,1.069,.327,1.639,.388v1.292c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.292c3.508-.376,6.25-3.352,6.25-6.958,0-.414-.336-.75-.75-.75Z"
          fill="currentColor"
        />
        <path
          d="M2,16.75c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061L15.47,1.47c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061L2.53,16.53c-.146,.146-.338,.22-.53,.22Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default microphoneSlash;
