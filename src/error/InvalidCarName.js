import CustomError from "./CustomError.js";

class InvalidCarNameError extends CustomError {
  constructor(message = 'Car name can not exceed 5 characters') {
    super(message);
  }
}

export default InvalidCarNameError;
