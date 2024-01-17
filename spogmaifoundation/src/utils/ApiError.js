class ApiError extends Error {
  constructor(
    statusCode,
    message = "something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);

    this.statusCode = statusCode;
    this.data = null; // Optional data payload that can be attached to the error
    this.message = message;
    this.success = false; // Indicates whether the operation that led to this error was successful or not
    this.errors = errors; // Array of additional error details

    // If a stack trace is provided, use it; otherwise, capture the stack trace
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
