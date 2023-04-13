export function setSettings(config: {
  mode: "Test" | "Prod";
  limitUsers?: boolean;
}) {
  return true;
}

// Config von Settings Function holen
type Config = any;

const cfg: Config = {
  theMode: "Dev", // sollte sich beschweren weil es 'mode' heisst
  limitUsers: 2, // muss boolean, kein number type sein
};

setSettings(cfg);
