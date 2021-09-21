import React from 'react'
import _ from 'lodash';
import numeral from 'numeral'

import {
  Text,
} from "tabler-react";

export default function TokenUsdAmount(props) {
  const symbol = props.symbol || '';
  const amountUsd = props.amountUsd || 0;
  const amountTokens = props.amountTokens || 0;

	return (
    <div>
      {
        _.isUndefined(props.amountUsd) ? <div /> : (
          <Text align="center" size="xl">
            <strong>
              {`${numeral(amountUsd).format('$0,00')}`}
            </strong>
          </Text>
        )
      }
      <Text align="center" size="sm" muted={!_.isUndefined(props.amountUsd)}>
        {`${numeral(amountTokens).format('0,00.0a')} ${symbol}`}
      </Text>
    </div>
  )
}