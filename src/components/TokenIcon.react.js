import React from 'react'
import _ from 'lodash';

import {
  Avatar,
  Text,
} from "tabler-react";

export default function TokenIcon(props) {
  const symbol = props.symbol || '';
  const imageUrl = props.imageUrl || '';

	return (
    <span>
      <Avatar
        imageURL={imageUrl}
        style={{"verticalAlign":"middle"}}
      />
      <Text
        size="h4"
        align="center"
        RootComponent="span"
        className="ml-2"
        style={{"verticalAlign":"middle"}}
      >
        {
          symbol
        }
      </Text>
    </span>
  )
}