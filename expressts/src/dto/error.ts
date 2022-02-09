class UserError {
  message: string;
  code: number;
  constructor(message: string, code: number) {
    this.code = code;
    this.message = message;
  }
}

export default UserError;
