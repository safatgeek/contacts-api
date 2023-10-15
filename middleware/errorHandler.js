const { constants } = require("../constant");

const errorHandler = (err, req, res, next) => {

  const statusCode = res.statusCode ? res.statusCode : 500;
  console.log(statusCode)
  
  switch (statusCode) {
    case constants.VALIDATION_ERR:
      res.json({
        title: "Validation failed !",
        message: err.message,
        stackTrace: err.stack,
      });

      break;

    case constants.NOT_FOUND:
      res.json({
        title: "Not found !",
        message: err.message,
        stackTrace: err.stack,
      });

      break;

    case constants.FORBIDEN:
      res.json({
        title: "forbiden !",
        message: err.message,
        stackTrace: err.stack,
      });

      break;

    case constants.UNAUTHORIZED:
      res.json({
        title: "unauthorized !",
        message: err.message,
        stackTrace: err.stack,
      });

      break;

    case constants.SERVER_ERR:
      res.json({
        title: "server error !",
        message: err.message,
        stackTrace: err.stack,
      });

      break;

    default:
      console.log("Something is wrong ")
      break;
  }
};

module.exports = errorHandler;
