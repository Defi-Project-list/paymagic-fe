import * as React from "react";
import Select from 'react-select'

import {
  Text,
} from "tabler-react";

type Props = {|
  +children?: React.Node,
  +tokenSymbol: string,
|};

function SelectToken({
  children,
  tokenSymbol,
}: Props): React.Node {

// let symbolImage, displayTokenSymbol
// if(tokenSymbol === 'dai') {
//   displayTokenSymbol='DAI';
//   symbolImage=`${process.env.PUBLIC_URL}/assets/${tokenSymbol}-logo.png`;
// }

  // const classes = cn(
  //   {
  //     tag: true,
  //     expanded: true,
  //     "tag-rounded": rounded,
  //     [`tag-${color}`]: color,
  //   },
  //   className
  // );

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

  return (
    <React.Fragment>
  		<Select options={options} />
    </React.Fragment>
  )
}

/** @component */
export default SelectToken;