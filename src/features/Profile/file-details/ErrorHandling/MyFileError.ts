export class MyFileError extends Error {
  details: string;

  constructor(msg: string, err: Error) {
    super(msg);
    this.name = "MyFileError";
    this.stack = err.stack;
    this.details = err.message;
  }
}
