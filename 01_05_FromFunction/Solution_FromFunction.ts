export function setSettings(config: {
  mode: "Test" | "Prod";
  limitUsers?: boolean;
}) {
  return true;
}

// Config von Settings Function holen
type Config = Parameters<typeof setSettings>[0];

const cfg: Config = {
  mode: "Prod", // sollte sich beschweren weil es 'mode' heisst
  limitUsers: true, // muss boolean, kein number type sein
};

setSettings(cfg);
