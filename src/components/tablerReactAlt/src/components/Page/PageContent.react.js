// @flow

import * as React from "react";
import cn from "classnames";
import { Container } from "../";
import PageHeader from "./PageHeader.react";
import Card from "../Card";
import Text from "../Text";
import Dimmer from "../Dimmer";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +title?: string,
  +subTitle?: string,
  +options?: React.Node,
  +web3ContextReady?: boolean,
  +walletContextLoading?: boolean,
|};

function PageContent({
  className,
  children,
  title,
  subTitle,
  options,
  headerClassName,
  web3ContextReady,
  walletContextLoading
}: Props): React.Node {
  const classes = cn("page-content", className);

  if(!web3ContextReady) {
    children = (<Card><Card.Body><Text className="text-center font-italic">Connect Wallet Above<span role="img">👆</span></Text></Card.Body></Card>)
  }
  // else if(walletContextLoading) {
  //   children = (<Dimmer active loader className="mt-8"/>)
  // }

  return (
    <div className={classes}>
      <Container>
        {(title || subTitle || options) && (
          <PageHeader title={title} subTitle={subTitle} options={options} className={headerClassName}/>
        )}
        {children}
      </Container>
    </div>
  );
}

PageContent.displayName = "Page.Content";

export default PageContent;
