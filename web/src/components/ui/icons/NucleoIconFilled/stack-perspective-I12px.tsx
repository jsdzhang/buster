import type { iconProps } from './iconProps';

function stackPerspective(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px stack perspective';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M2.251,13.306c-.26,0-.517-.081-.732-.236-.325-.234-.519-.613-.519-1.014V5.944c0-.401,.194-.78,.519-1.014,.325-.234,.747-.299,1.126-.172l.842,.281c.393,.131,.605,.556,.474,.949-.131,.392-.556,.604-.949,.474l-.513-.171v5.419l.513-.171c.394-.131,.818,.081,.949,.474,.131,.393-.081,.818-.474,.949l-.842,.281c-.128,.043-.262,.064-.394,.064Z"
          fill="currentColor"
        />
        <path
          d="M6.25,15.25c-.243,0-.484-.071-.693-.21-.348-.232-.556-.621-.556-1.04V4c0-.419,.208-.808,.556-1.04,.35-.232,.789-.273,1.174-.114l.808,.336c.382,.159,.563,.599,.404,.981s-.598,.562-.981,.404l-.461-.192V13.625l.461-.192c.384-.159,.822,.022,.981,.404,.159,.382-.021,.822-.404,.981l-.808,.336c-.155,.064-.319,.096-.481,.096Z"
          fill="currentColor"
        />
        <path
          d="M15.983,3.551L10.774,1.146c-.389-.179-.836-.148-1.198,.082-.361,.231-.576,.625-.576,1.053V15.719c0,.428,.215,.822,.576,1.053,.205,.131,.438,.198,.673,.198,.178,0,.357-.039,.525-.116l5.209-2.404c.618-.285,1.017-.909,1.017-1.589V5.14c0-.68-.399-1.304-1.017-1.589Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default stackPerspective;
