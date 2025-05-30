import React from 'react';

import { iconProps } from './iconProps';

function babyClothes(props: iconProps) {
  const strokewidth = props.strokewidth || 1.3;
  const title = props.title || '18px baby clothes';

  return (
    <svg height="1em" width="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M16.881,6.344l-1.78-2.769c-.411-.639-1.075-1.083-1.821-1.218l-1.662-.302c-.21-.038-.427,.014-.595,.146-.168,.131-.273,.328-.288,.541-.062,.916-.824,1.633-1.735,1.633s-1.673-.717-1.735-1.633c-.015-.213-.119-.41-.288-.541-.168-.132-.385-.184-.595-.146l-1.662,.302c-.747,.136-1.411,.58-1.821,1.218l-1.78,2.769c-.208,.323-.138,.75,.161,.99l1.823,1.465c.034-.594,.051-1.189,.031-1.779-.012-.345,.258-.634,.604-.646,.325-.018,.634,.258,.646,.604,.03,.877-.009,1.768-.08,2.648-.099,1.24-.244,2.14-.296,2.521-.029,.214,.036,.432,.178,.595,.143,.164,.349,.257,.565,.257,.218,0,.979,.047,1.591,.659,.425,.425,.659,.99,.659,1.591,0,.414,.336,.75,.75,.75h2.5c.414,0,.75-.336,.75-.75,0-.601,.234-1.166,.659-1.591,.612-.612,1.373-.659,1.591-.659,.217,0,.423-.094,.565-.257,.142-.163,.207-.38,.178-.595-.052-.381-.197-1.281-.296-2.521-.07-.88-.109-1.771-.08-2.648,.011-.345,.32-.621,.646-.604,.345,.012,.615,.301,.604,.646-.02,.59-.003,1.185,.031,1.779l1.823-1.465c.299-.24,.369-.667,.161-.99Zm-7.746,4.162c-.085,.043-.184,.043-.269,0-.449-.23-1.866-1.064-1.866-2.421-.002-.596,.487-1.081,1.093-1.085,.365,.005,.704,.186,.907,.483,.203-.298,.542-.479,.907-.483,.606,.004,1.095,.489,1.093,1.085,0,1.357-1.417,2.191-1.866,2.421Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default babyClothes;
