import type { iconProps } from './iconProps';

function magnifierStar(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px magnifier star';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M16.78,14.97l-3.468-3.468c.76-.986,1.188-2.204,1.188-3.501,0-3.17-2.579-5.75-5.75-5.75-2.699,0-5.065,1.914-5.624,4.551-.086,.405,.173,.804,.578,.89,.397,.081,.803-.173,.889-.578,.413-1.949,2.162-3.363,4.157-3.363,2.344,0,4.25,1.907,4.25,4.25,0,1.501-.768,2.861-2.054,3.64-.354,.214-.469,.675-.254,1.03,.141,.233,.389,.362,.643,.362,.132,0,.266-.035,.387-.108,.185-.112,.357-.237,.525-.365l3.473,3.473c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061Z"
          fill="currentColor"
        />
        <path
          d="M9.107,10.644l-2.027-.295-.907-1.838c-.254-.512-1.092-.512-1.346,0l-.907,1.838-2.027,.295c-.283,.041-.518,.239-.605,.51-.089,.272-.015,.57,.189,.769l1.468,1.43-.347,2.02c-.048,.282,.067,.566,.299,.734,.229,.167,.536,.189,.789,.057l1.814-.954,1.814,.954c.109,.058,.229,.086,.349,.086,.155,0,.311-.048,.44-.143,.231-.168,.347-.452,.299-.734l-.347-2.02,1.468-1.43c.204-.199,.278-.497,.189-.769-.088-.271-.322-.469-.605-.51Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default magnifierStar;
