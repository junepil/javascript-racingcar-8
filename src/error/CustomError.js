import generateErrorMessage from './util';

class CustomError extends Error {
  constructor(message) {
    super(generateErrorMessage(message));
  }
}

export default CustomError;
