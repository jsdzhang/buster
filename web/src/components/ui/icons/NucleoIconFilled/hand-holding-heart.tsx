import type { iconProps } from './iconProps';

function handHoldingHeart(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px hand holding heart';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M17.808,11.19c-.491-1.087-1.774-1.575-2.862-1.083l-3.002,1.355c-.02-.175-.054-.349-.118-.519-.203-.541-.605-.971-1.13-1.209l-2.782-1.271c-1.185-.528-2.424-.518-3.492,.03-.472,.242-.875,.591-1.218,.992-.314-.299-.737-.486-1.204-.486h-.25c-.965,.001-1.75,.786-1.75,1.751v5c0,.965,.785,1.75,1.75,1.75h.25c.831,0,1.526-.584,1.703-1.363l3.547,1.134c.373,.12,.759,.179,1.143,.179,.527,0,1.053-.111,1.542-.333l6.791-3.065c1.088-.491,1.573-1.775,1.082-2.863h0Zm-1.352,1.126c-.062,.166-.186,.298-.348,.371l-6.791,3.065c-.508,.229-1.079,.263-1.61,.092l-3.957-1.265v-2.973c.172-.753,.684-1.432,1.356-1.776,.666-.341,1.424-.338,2.19,.002l2.778,1.269c.161,.073,.284,.205,.347,.371s.057,.347-.017,.509c-.073,.161-.205,.284-.371,.347-.166,.062-.347,.057-.509-.017l-1.971-.895c-.374-.169-.821-.004-.992,.373-.172,.377-.005,.822,.373,.993l1.971,.895c.285,.129,.589,.194,.893,.194,.257,0,.515-.046,.763-.139,.053-.02,5.001-2.256,5.001-2.256,.333-.151,.729,0,.878,.333,.073,.162,.079,.342,.016,.508h0Z"
          fill="currentColor"
        />
        <path
          d="M10.731,7.183c.17,.089,.368,.089,.538,0,.897-.472,3.731-2.181,3.731-4.961C15.004,1.002,14.026,.007,12.813,0c-.73,.009-1.408,.38-1.813,.991-.405-.611-1.084-.981-1.813-.991-1.213,.007-2.191,1.002-2.187,2.222,0,2.78,2.834,4.489,3.731,4.961Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default handHoldingHeart;
