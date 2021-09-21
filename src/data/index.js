import production from "./kovanPaymagic";
import test from "./kovanPaymagic";
import development from "./kovanPaymagic";

const env = process.env.REACT_APP_APP_ENV || 'test'; // defaulting to after ||

const config = {
  development,
  production,
  test
};

export default config[env]; 