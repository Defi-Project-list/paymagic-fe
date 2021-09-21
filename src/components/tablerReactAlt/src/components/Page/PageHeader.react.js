// @flow

import * as React from "react";
import PageTitle from "./PageTitle.react";
import PageSubTitle from "./PageSubTitle.react";
import PageOptions from "./PageOptions.react";

type Props = {|
  +children?: React.Node,
  +title?: string,
  +subTitle?: string,
  +options?: React.Node,
|};

function PageHeader({ children, title, subTitle, className, options }: Props): React.Node {

  console.log(className)
  return (
    <div className={`page-header ${className}`}>
      {title && <PageTitle>{title}</PageTitle>}
      {subTitle && <PageSubTitle>{subTitle}</PageSubTitle>}
      {options && <PageOptions>{options}</PageOptions>}
      {children}
    </div>
  );
}

PageHeader.displayName = "Page.Header";

export default PageHeader;
