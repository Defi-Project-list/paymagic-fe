import development from "./kovanPaymagic";
import test from "./kovanPaymagic";
import kovan from "./kovanPaymagic";

import polygon from "./polygonPaymagic";
import production from "./polygonPaymagic";


const env = process.env.REACT_APP_APP_ENV || 'test'; // defaulting to after ||

const config = {
  development,
  test,
  polygon,
  production
};

export default config[env]; 