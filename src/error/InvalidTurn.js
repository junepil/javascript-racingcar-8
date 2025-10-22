import CustomError from "./CustomError";

class InvalidTurnError extends CustomError {
  constructor(message = 'Turn should be a natural number') {
    super(message);
  }
}

export default InvalidTurnError;