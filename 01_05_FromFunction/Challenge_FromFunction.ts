export const Settings = (config: {
  mode: "Test" | "Prod";
  limitUsers?: boolean;
}) => {
  return true;
};

// Config von Settings Function holen
type Config = any;

const cfg: Config = {
  mode: "Prod",
};

Settings(cfg);
