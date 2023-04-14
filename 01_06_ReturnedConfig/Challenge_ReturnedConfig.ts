function getDefaultConfig() {
  // nicht ändern!
  return {
    appName: "My App",
    isProduction: false,
    currentVersion: "v2.3",
  };
}

type Config = any; // abgeleitet von getDefaultConfig

const customConfig: Config = {
  name: "My App",
  isProduction: true,
  version: "v3.0",
};

function ensureConfigIsValidOrThrow(config: Config) {
  if (!config.version) {
    throw new Error("Version must be set in config");
  }

  if (!config.customAppName) {
    throw new Error("App name must be set in config");
  }
}

ensureConfigIsValidOrThrow(customConfig);

export {};
