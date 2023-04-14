function getDefaultConfig() {
  // nicht ändern!
  return {
    appName: "My App",
    isProduction: false,
    currentVersion: "v2.3",
  };
}

type Config = ReturnType<typeof getDefaultConfig>; // abgeleitet von getDefaultConfig

const customConfig: Config = {
  appName: "My App 2",
  isProduction: true,
  currentVersion: "v3.0",
};

function ensureConfigIsValidOrThrow(config: Config) {
  if (!config.currentVersion) {
    throw new Error("Version must be set in config");
  }

  if (!config.appName) {
    throw new Error("App name must be set in config");
  }
}

ensureConfigIsValidOrThrow(customConfig);

export {};
