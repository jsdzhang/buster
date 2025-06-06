import type { iconProps } from './iconProps';

function lips(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px lips';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M1.25,8.25c1.521,0,2.215-.188,2.826-.354,.479-.13,.93-.252,1.603-.252,.784,0,1.29,.171,1.735,.322,.451,.153,.841,.285,1.586,.285s1.135-.132,1.586-.285c.445-.151,.951-.322,1.735-.322,.698,0,1.257,.131,1.848,.271,.704,.166,1.432,.336,2.581,.336h.31l-3.011-3.01c-.747-.783-1.732-1.223-2.775-1.239-.858-.008-1.604,.237-2.274,.708-.671-.471-1.407-.714-2.274-.708-1.043,.016-2.028,.456-2.763,1.227L.94,8.25h.31Z"
          fill="currentColor"
        />
        <path
          d="M16.75,9.75c-1.323,0-2.211-.208-2.924-.376-.548-.129-.98-.23-1.505-.23-.537,0-.854,.107-1.255,.243-.504,.17-1.074,.364-2.066,.364s-1.562-.193-2.066-.364c-.401-.136-.718-.243-1.255-.243-.473,0-.782,.084-1.209,.2-.668,.182-1.498,.407-3.22,.407h-.331c1.632,1.781,4.06,4.25,8.081,4.25s6.449-2.469,8.081-4.25h-.331Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default lips;
