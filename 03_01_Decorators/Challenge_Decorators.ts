function jsonToName(originalMethod: any, context: any) {}

class FetchJson {
  @jsonToName
  static dataFromServer() {
    return '{"name": "Decorators are cool"}';
  }
}

console.log(FetchJson.dataFromServer());

export {};
