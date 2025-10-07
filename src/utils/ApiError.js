class ApiError extends Error {
  // ApiError → custom child class (tumhari apni API ke liye).

  // Error → JavaScript ka built-in parent class (default JS Error object).

  // extends → Batata hai ki ApiError → Error se inherit kar rahi hai.

  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);

    // We need super(message) because ApiError is a child class of the built-in Error class.
    // Without it, the JavaScript Error constructor won’t run, and your error will behave like a normal object, not a proper Error.

    //--------------------------------

    // What super(message) Does

    // Calls the parent (Error) constructor.

    // Properly sets:

    // this.message → the error text

    // this.name → "ApiError"

    // this.stack → stack trace (line numbers, file path)

    // Makes instanceof Error checks work.

    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };

// constructor kyu use karte hain

// constructor ek special function hai jo class ka object bante hi sabse pehle call hota hai.

// Yahi par hum apni class ke liye custom properties set karte hain
// (e.g. statusCode, success, errors etc.).

// Jab hum new ApiError(404, "Not found") likhte hain
// → constructor call hota hai
// → wo saare values object me set karta hai.
