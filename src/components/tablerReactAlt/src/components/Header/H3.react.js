// @flow

import * as React from "react";
import cn from "classnames";
import Header from "./Header.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

/**
 * A Header component rendered as a h3 HTML element with a margin below
 */
function H3({ className, children }: Props): React.Node {
  const classes: string = cn("mt-0 mb-4", className);
  return (
    <Header RootComponent="h3" className={classes} size={3}>
      {children}
    </Header>
  );
}

H3.displayName = "Header.H3";

export default H3;
