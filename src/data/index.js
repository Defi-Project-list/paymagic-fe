import development from "./kovanPaymagic";
import test from "./kovanPaymagic";
import kovan from "./kovanPaymagic";

import polygon from "./polygonPaymagic";

import mainnet from "./mainnetPaymagic";
import production from "./mainnetPaymagic";


const env = process.env.REACT_APP_APP_ENV || 'test'; // defaulting to after ||

const config = {
  development,
  test,
  kovan,
  polygon,
  mainnet,
  production
};

export default config[env]; 