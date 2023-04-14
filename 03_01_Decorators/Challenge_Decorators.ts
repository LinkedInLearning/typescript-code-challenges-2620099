function jsonToObject(originalMethod: any, context: any) {}

class FetchJson {
  @jsonToObject
  static dataFromServer() {
    return '{"name": "Decorators are cool"}';
  }
}

console.log(FetchJson.dataFromServer());

export {};
