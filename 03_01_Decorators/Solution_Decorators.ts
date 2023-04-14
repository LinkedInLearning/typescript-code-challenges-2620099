function jsonToName(originalMethod: any, context: any) {
  return () => {
    return JSON.parse(originalMethod()).name;
  };
}

class FetchJson {
  @jsonToName
  static dataFromServer() {
    return '{"name": "Decorators sind cool!"}';
  }
}

console.log(FetchJson.dataFromServer());

export {};
