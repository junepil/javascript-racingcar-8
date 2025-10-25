import CustomError from "./CustomError.js";

class InvalidTurnError extends CustomError {
  constructor(message = 'Turn should be a natural number') {
    super(message);
  }
}

export default InvalidTurnError;