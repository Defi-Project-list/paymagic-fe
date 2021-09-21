import * as React from "react";

import {
  Text,
} from "tabler-react";

type Props = {|
  +children?: React.Node,
  +tokenSymbol: string,
|};

function DisplayToken({
  children,
  tokenSymbol,
}: Props): React.Node {

let symbolImage, displayTokenSymbol
if(tokenSymbol === 'dai') {
  displayTokenSymbol='DAI';
  symbolImage=`${process.env.PUBLIC_URL}/assets/${tokenSymbol}-logo.png`;
}

  // const classes = cn(
  //   {
  //     tag: true,
  //     expanded: true,
  //     "tag-rounded": rounded,
  //     [`tag-${color}`]: color,
  //   },
  //   className
  // );
  return (
    <React.Fragment>
      <span
        class="tag-avatar avatar"
        style={{ backgroundImage: `url(${symbolImage})` }}
      />
      <span>{displayTokenSymbol}</span>
    </React.Fragment>
  )
}

/** @component */
export default DisplayToken;