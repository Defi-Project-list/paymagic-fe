import * as React from "react";
import Select from 'react-select'

import {
  Text,
} from "tabler-react";

type Props = {|
  +children?: React.Node,
  +name?: string,
  +placeholder?: string,
  +defaultValue?: string | number,
  +disabled?: boolean,
  +onChange?: any,
|};

function SelectToken({
  children,
  name,
  value,
  disabled,
  onChange,
  defaultValue,
  placeholder
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
  { value: 'USDC', label: 'USDC' },
  // { value: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', label: 'USDC' }
  { value: 'DAI', label: 'DAI' },
  { value: 'WETH', label: 'wETH' }
]

  return (
    <React.Fragment>
  		<Select
        options={options}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        isDisabled={disabled}
        defaultInputValue={defaultValue}
      />
    </React.Fragment>
  )
}

/** @component */
export default SelectToken;