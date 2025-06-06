import type { iconProps } from './iconProps';

function faceCheck(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px face check';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M16.302,5.748l-.648,.858c-.383,.507-.966,.83-1.6,.885l-.196,.009c-.573,0-1.119-.215-1.537-.607l-1.606-1.498c-.439-.409-.693-.966-.714-1.567s.193-1.174,.604-1.614c.335-.359,.782-.591,1.262-.675-.892-.344-1.856-.54-2.867-.54C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8c0-1.158-.253-2.257-.698-3.252Zm-11.302,3.252c0-.552,.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm6.884,3.16c-.631,.996-1.709,1.59-2.884,1.59s-2.253-.595-2.884-1.59c-.222-.35-.117-.813,.232-1.035,.349-.221,.812-.118,1.035,.232,.354,.559,.958,.893,1.616,.893s1.262-.334,1.616-.893c.222-.35,.684-.454,1.035-.232,.35,.222,.454,.685,.232,1.035Zm.116-2.16c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Z"
          fill="currentColor"
        />
        <path
          d="M13.859,6c-.189,0-.372-.071-.511-.202l-1.609-1.5c-.303-.282-.32-.757-.037-1.06s.757-.319,1.06-.037l1,.932L16.658,.298c.25-.33,.719-.396,1.051-.146,.331,.25,.396,.72,.146,1.051l-3.397,4.5c-.128,.169-.322,.276-.534,.295-.021,.002-.043,.003-.065,.003Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default faceCheck;
