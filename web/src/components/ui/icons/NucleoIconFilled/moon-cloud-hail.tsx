import type { iconProps } from './iconProps';

function moonCloudHail(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px moon cloud hail';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M14.341,7.922c-.167,0-.335-.055-.474-.169-.321-.262-.369-.734-.107-1.055,.081-.1,.157-.205,.226-.313-2.41-.133-4.348-2.071-4.479-4.482-.921,.58-1.507,1.598-1.507,2.74,0,.651,.191,1.279,.555,1.816,.232,.343,.143,.81-.201,1.042-.344,.233-.811,.141-1.041-.201-.531-.786-.812-1.705-.812-2.657C6.5,2.417,8.018,.516,10.19,.019c.251-.057,.514,.018,.697,.2,.182,.182,.258,.445,.201,.697-.06,.263-.089,.5-.089,.726,0,1.792,1.458,3.25,3.25,3.25,.227,0,.463-.029,.724-.089,.253-.059,.515,.018,.698,.2,.183,.183,.259,.446,.201,.698-.162,.709-.491,1.381-.951,1.945-.148,.182-.364,.276-.581,.276Z"
          fill="currentColor"
        />
        <path
          d="M13.75,8.5c-.234,0-.467,.026-.696,.079-.732-1.551-2.302-2.579-4.054-2.579s-3.322,1.028-4.054,2.579c-.229-.053-.461-.079-.696-.079-1.792,0-3.25,1.458-3.25,3.25,0,1.752,1.397,3.176,3.135,3.238-.081-.232-.135-.478-.135-.738,0-1.241,1.01-2.25,2.25-2.25,.212,0,.414,.039,.609,.094,.283-.919,1.13-1.594,2.141-1.594s1.858,.675,2.141,1.594c.195-.055,.396-.094,.609-.094,1.24,0,2.25,1.009,2.25,2.25,0,.26-.053,.506-.135,.738,1.738-.062,3.135-1.486,3.135-3.238,0-1.792-1.458-3.25-3.25-3.25Z"
          fill="currentColor"
        />
        <circle cx="11.75" cy="17.25" fill="currentColor" r=".75" />
        <circle cx="6.25" cy="17.25" fill="currentColor" r=".75" />
        <circle cx="9" cy="15.75" fill="currentColor" r=".75" />
        <circle cx="11.75" cy="14.25" fill="currentColor" r=".75" />
        <circle cx="6.25" cy="14.25" fill="currentColor" r=".75" />
        <circle cx="9" cy="12.75" fill="currentColor" r=".75" />
      </g>
    </svg>
  );
}

export default moonCloudHail;
