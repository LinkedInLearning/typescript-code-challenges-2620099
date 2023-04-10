function getConfig() {
  return {
    appName: "My App",
    isProduction: false,
    currentVersion: "v2.3",
  };
}

//

function ensureConfigIsValidOrThrow(config: any) {
  if (!config.version) {
    throw new Error("Version must be set in config");
  }

  if (!config.appNameString) {
    throw new Error("App name must be set in config");
  }
}

const theConfig = getConfig();
ensureConfigIsValidOrThrow(theConfig);

export {};
