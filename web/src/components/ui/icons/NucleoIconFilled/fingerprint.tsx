import type { iconProps } from './iconProps';

function fingerprint(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px fingerprint';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M14.013,14.963c-.08,0-.161-.013-.241-.04-.393-.133-.603-.559-.469-.951,.629-1.851,.947-3.86,.947-5.972,0-2.895-2.355-5.25-5.25-5.25-1.259,0-2.478,.455-3.432,1.28-.312,.271-.787,.237-1.058-.077s-.236-.787,.077-1.058c1.226-1.061,2.793-1.645,4.412-1.645,3.722,0,6.75,3.028,6.75,6.75,0,2.276-.346,4.447-1.027,6.454-.105,.312-.397,.509-.71,.509Z"
          fill="currentColor"
        />
        <path
          d="M1.906,12.453c-.134,0-.27-.036-.392-.111-.354-.217-.463-.679-.246-1.032,.935-1.519,.981-3.023,.981-3.31,0-1.004,.216-1.971,.643-2.872,.177-.374,.621-.536,.998-.358,.375,.177,.535,.624,.357,.999-.33,.7-.498,1.451-.498,2.231,0,.357-.058,2.232-1.204,4.096-.142,.23-.388,.357-.64,.357Z"
          fill="currentColor"
        />
        <path
          d="M9.918,16.698c-.129,0-.26-.033-.38-.104-.356-.21-.476-.67-.266-1.027,.982-1.669,1.606-3.526,1.854-5.518,.051-.412,.415-.703,.837-.652,.411,.051,.702,.425,.651,.836-.272,2.197-.962,4.247-2.049,6.094-.14,.237-.391,.37-.647,.37Z"
          fill="currentColor"
        />
        <path
          d="M3.872,14.89c-.169,0-.338-.056-.479-.172-.318-.264-.363-.737-.1-1.056,1.298-1.569,1.956-3.474,1.956-5.662,0-2.068,1.683-3.75,3.75-3.75,1.878,0,3.477,1.402,3.719,3.262,.053,.411-.236,.787-.647,.84-.417,.052-.787-.237-.841-.647-.145-1.115-1.104-1.955-2.23-1.955-1.24,0-2.25,1.009-2.25,2.25,0,2.546-.773,4.773-2.3,6.618-.148,.179-.362,.272-.578,.272Z"
          fill="currentColor"
        />
        <path
          d="M6.55,16.368c-.158,0-.317-.05-.453-.153-.329-.251-.394-.721-.143-1.051,1.523-2.004,2.296-4.414,2.296-7.164,0-.414,.336-.75,.75-.75s.75,.336,.75,.75c0,3.085-.876,5.801-2.603,8.072-.147,.194-.371,.296-.598,.296Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default fingerprint;
