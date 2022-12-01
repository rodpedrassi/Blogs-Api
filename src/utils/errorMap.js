const errorMap = {
    USER_EXISTS: 409,
    INVALID_NAME: 400,
    INVALID_EMAIL: 400,
    INVALID_PASSWORD: 400,
    USER_NOT_FOUND: 404,
  };
  
  const mapError = (type) => errorMap[type] || 500;
  
  module.exports = {
    errorMap,
    mapError,
  };
