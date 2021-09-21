// @flow

import * as React from "react";
import { Link } from "react-router-dom";

import { Avatar } from "../";

type Props = {|
  +href?: string,
  +src?: string,
  +alt?: string,
|};

const SiteLogo = (props: Props): React.Node => (
  <Link to={props.href} className="header-brand">
  	<Avatar size="md" imageURL={props.src} className="header-brand-img" alt={props.alt} />
  	<span className="h1">Paymagic</span>
  </Link>
);

SiteLogo.displayName = "Site.Logo";

export default SiteLogo;
