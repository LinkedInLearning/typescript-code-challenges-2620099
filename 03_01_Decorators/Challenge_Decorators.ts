function jsonToObject(originalMethod: any, context: any) {
  return function decoratorFunction(this: any, ...args: any[]) {
    return JSON.parse(originalMethod(...args));
  };
}

class FetchJson {
  @jsonToObject
  static dataFromServer() {
    return '{"name": "Decorators are cool"}';
  }
}

console.log(FetchJson.dataFromServer());

export {};
