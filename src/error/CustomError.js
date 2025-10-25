import generateErrorMessage from './util.js';

class CustomError extends Error {
  constructor(message) {
    super(generateErrorMessage(message));
  }
}

export default CustomError;
