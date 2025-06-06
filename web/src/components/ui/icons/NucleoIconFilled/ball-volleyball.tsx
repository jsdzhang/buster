import type { iconProps } from './iconProps';

function ballVolleyball(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px ball volleyball';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M15.625,9.905c-2.716-3.474-4.719-4.139-6.907-3.819,.114,.774,.368,1.524,.762,2.218,1.745,.228,3.368,1.027,4.606,2.29,.646,.723,1.135,1.516,1.479,2.383,.01,.03,.06,.185,.122,.403,.36-.548,.651-1.145,.87-1.775-.509-1.095-.922-1.688-.931-1.7Z"
          fill="currentColor"
        />
        <path
          d="M11.494,10.521c-.698-.378-1.462-.628-2.266-.725-.916,.797-1.996,1.366-3.158,1.672-.019,.007-.038,.01-.057,.016-.519,.133-1.052,.219-1.594,.243-.968,0-1.885-.165-2.761-.486-.024-.009-.165-.062-.375-.16,.191,.707,.475,1.374,.841,1.99,1.08,.349,1.92,.428,1.935,.43,4.437,.153,6.267-1.01,7.434-2.979Z"
          fill="currentColor"
        />
        <path
          d="M9.52,2.148c-.393,.641-.67,1.345-.82,2.089-.018,.115-.01,.23-.021,.346,3.021-.363,5.446,.967,8.148,4.423,.015,.021,.075,.106,.161,.241,.003-.083,.013-.164,.013-.247,0-3.939-2.864-7.214-6.617-7.872-.559,.551-.858,1.012-.863,1.021Z"
          fill="currentColor"
        />
        <path
          d="M2.175,9.833c.712,.26,1.456,.393,2.214,.395,.047-.002,.091-.016,.138-.019-1.304-2.339-1.309-5.36-.544-7.306,.025-.067,.059-.123,.085-.188-1.864,1.466-3.068,3.736-3.068,6.286,0,.065,.008,.129,.01,.194,.622,.431,1.154,.635,1.165,.639Z"
          fill="currentColor"
        />
        <path
          d="M14.157,13.495c-.266-.668-.663-1.311-1.167-1.877-.081-.083-.179-.146-.264-.224-1.19,1.972-3.183,3.617-7.993,3.617-.246,0-.499-.004-.761-.013-.026-.002-.131-.012-.285-.032,1.415,1.261,3.273,2.035,5.312,2.035,2.121,0,4.047-.835,5.48-2.187-.144-.773-.319-1.307-.323-1.318Z"
          fill="currentColor"
        />
        <path
          d="M7.223,3.975c.192-.952,.534-1.819,1.021-2.614,.012-.02,.094-.146,.234-.334-.605,.04-1.193,.141-1.755,.308-.487,.509-1.003,1.198-1.339,2.103-.589,1.498-.693,4.367,.718,6.44,.696-.236,1.346-.592,1.929-1.059-.777-1.482-1.065-3.178-.808-4.844Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default ballVolleyball;
