!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.swaggerClientGenerator=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';

function DataTypeValidationError(message){
  this.name = 'DataTypeValidationError';
  this.message = message || 'Invalid data type';
}
DataTypeValidationError.prototype = Object.create(Error.prototype);
DataTypeValidationError.prototype.constructor = DataTypeValidationError;
exports.DataTypeValidationError = DataTypeValidationError;

function NotAnIntegerError(value){
  this.name = 'NotAnIntegerError';
  this.message = '"' + value + '" is not an integer';
  this.value = value;
}
NotAnIntegerError.prototype = Object.create(DataTypeValidationError.prototype);
NotAnIntegerError.prototype.constructor = NotAnIntegerError;
exports.NotAnIntegerError = NotAnIntegerError;

function NotANumberError(value, actualType){
  this.name = 'NotANumberError';
  this.message = '"' + value + '" is not a number';
  if(actualType) this.message += ' (got a ' + actualType + ' instead)';

  this.value = value;
}
NotANumberError.prototype = Object.create(DataTypeValidationError.prototype);
NotANumberError.prototype.constructor = NotANumberError;
exports.NotANumberError = NotANumberError;

function NumberTooLargeError(value, max){
  this.name = 'NumberTooLargeError';
  this.message = '"' + value + '" is above the maximum of ' + max.toString();
  this.value = value;
}
NumberTooLargeError.prototype = Object.create(DataTypeValidationError.prototype);
NumberTooLargeError.prototype.constructor = NumberTooLargeError;
exports.NumberTooLargeError = NumberTooLargeError;

function NumberTooSmallError(value, max){
  this.name = 'NumberTooSmallError';
  this.message = '"' + value + '" is above the maximum of ' + max.toString();
  this.value = value;
}
NumberTooSmallError.prototype = Object.create(DataTypeValidationError.prototype);
NumberTooSmallError.prototype.constructor = NumberTooSmallError;
exports.NumberTooSmallError = NumberTooSmallError;

function NotABooleanError(value, actualType){
  this.name = 'NotABooleanError';
  this.message = '"' + value + '" is not a boolean';
  if(actualType) this.message += ' (got a ' + actualType + ' instead)';

  this.value = value;
}
NotABooleanError.prototype = Object.create(DataTypeValidationError.prototype);
NotABooleanError.prototype.constructor = NotABooleanError;
exports.NotABooleanError = NotABooleanError;

function NotAnArrayError(value, actualType){
  this.name = 'NotAnArrayError';
  this.message = '"' + value + '" is not an array';
  if(actualType) this.message += ' (got a ' + actualType + ' instead)';

  this.value = value;
}
NotAnArrayError.prototype = Object.create(DataTypeValidationError.prototype);
NotAnArrayError.prototype.constructor = NotAnArrayError;
exports.NotAnArrayError = NotAnArrayError;

function DuplicateInSetError(arr, dupes){
  this.name = 'DuplicateInSetError';
  this.message = 'Duplicates ("' + dupes.join('", "') + '") found in set: ["' + arr.join('", "') + '"';
  this.dupes = dupes;
  this.value = arr;
}
DuplicateInSetError.prototype = Object.create(DataTypeValidationError.prototype);
DuplicateInSetError.prototype.constructor = DuplicateInSetError;
exports.DuplicateInSetError = DuplicateInSetError;

function NotVoidError(value, actualType){
  this.name = 'NotVoidError';
  this.message = '"' + value + '" is not null or undefined';
  if(actualType) this.message += ' (got a ' + actualType + ' instead)';

  this.value = value;
}
NotVoidError.prototype = Object.create(DataTypeValidationError.prototype);
NotVoidError.prototype.constructor = NotVoidError;
exports.NotVoidError = NotVoidError;

function NotAStringError(value, actualType){
  this.name = 'NotAStringError';
  this.message = '"' + value + '" is not a string';
  if(actualType) this.message += ' (got a ' + actualType + ' instead)';

  this.value = value;
}
NotAStringError.prototype = Object.create(DataTypeValidationError.prototype);
NotAStringError.prototype.constructor = NotAStringError;
exports.NotAStringError = NotAStringError;

function StringNotInEnumError(value, acceptableValues){
  this.name = 'StringNotInEnumError';
  this.message = '"' + value + '" is not an acceptable value: "' + acceptableValues.join('", "') + '"';
 
  this.value = value;
}
StringNotInEnumError.prototype = Object.create(DataTypeValidationError.prototype);
StringNotInEnumError.prototype.constructor = StringNotInEnumError;
exports.StringNotInEnumError = StringNotInEnumError;


function ErrorsInArrayElementsError(errors){
  this.name = 'ErrorsInArrayElementsError';
  this.message = 'Errors in array elements:\n\t' + errors.join(',\n\t');
  this.errors = errors;
}
ErrorsInArrayElementsError.prototype = Object.create(DataTypeValidationError.prototype);
ErrorsInArrayElementsError.prototype.constructor = ErrorsInArrayElementsError;
exports.ErrorsInArrayElementsError = ErrorsInArrayElementsError;

function MissingValueError(){
  this.name = 'MissingValueError';
  
  this.message = 'This value is required but missing';
}
MissingValueError.prototype = Object.create(DataTypeValidationError.prototype);
MissingValueError.prototype.constructor = MissingValueError;
exports.MissingValueError = MissingValueError;

function ValidationError(specName, spec, error){
  this.name = 'ValidationError';
  this.specName = specName;
  this.spec = spec;
  this.error = error;

  this.message = specName + ' is invalid: ' + error.message;
}
ValidationError.prototype = Object.create(DataTypeValidationError.prototype);
ValidationError.prototype.constructor = ValidationError;
exports.ValidationError = ValidationError;

function ValidationErrors(value, specName, spec, errors){
  this.name = 'ValidationErrors';

  this.value = value;
  this.specName = specName;
  this.spec = spec;
  this.errors = errors || [];

  this.message = specName + ' is invalid';

  if(this.errors.length){
    this.message += ':\n\t' + this.errors.map(function(e){ return e.message; }).join('\n\t');
  }
}
ValidationErrors.prototype = Object.create(DataTypeValidationError.prototype);
ValidationErrors.prototype.constructor = ValidationErrors;
exports.ValidationErrors = ValidationErrors;

},{}],2:[function(_dereq_,module,exports){
exports.dataType = _dereq_('./validateDataType');
exports.model = _dereq_('./validateModel');
exports.operation = _dereq_('./validateOperation');
exports.array = _dereq_('./validateArray');
exports.errors = _dereq_('./errorTypes');

var primitives = _dereq_('./validatePrimitiveTypes');
exports.primitive = {
  integer: primitives.validateInteger,
  number: primitives.validateNumber,
  string: primitives.validateString,
  boolean: primitives.validateBoolean,
  void: primitives.validateVoid,
  file: primitives.validateFile
};

},{"./errorTypes":1,"./validateArray":3,"./validateDataType":4,"./validateModel":5,"./validateOperation":6,"./validatePrimitiveTypes":7}],3:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes'),
  validate = _dereq_('./index');

function validateArray(candidate, dataType, models){
  if(!Array.isArray(candidate)){
    return new errorTypes.NotAnArrayError(candidate, typeof candidate);
  }

  var items = dataType.items;

  if(dataType.uniqueItems){
    var dupeCheck = [];
    var dupes = candidate.filter(function(value){
      var signature;
      if(items.$ref){
        signature = JSON.stringify(value);
      } else {
        signature = value;
      }
      if(dupeCheck.indexOf(signature) !== -1){
        return true;
      } else {
        dupeCheck.push(signature);
        return false;
      }
    });

    if(dupes.length) {
      return new errorTypes.DuplicateInSetError(candidate, dupes);
    }
  }

  var errors;

  if(items.$ref){
    var model = models[items.$ref];
    errors = candidate.filter(function(value){
      return validate.model(value, model, models);
    });
  } else {
    errors = candidate.filter(function(value){
      return validate.dataType(value, items, models);
    });
  }

  if(errors.length){
    return new errorTypes.ErrorsInArrayElementsError(errors);
  }
}
module.exports = validateArray;
},{"./errorTypes":1,"./index":2}],4:[function(_dereq_,module,exports){
'use strict';

var validate = _dereq_('./index');
  
function validateDataType(candidate, dataType, models){
  models = models || {};
      
  var type = dataType.type || dataType.dataType || dataType.$ref;

  switch(type){
    case 'integer':
      return validate.primitive.integer(candidate, dataType);
    case 'number':
      return validate.primitive.number(candidate, dataType);
    case 'string':
      return validate.primitive.string(candidate, dataType);
    case 'boolean':
      return validate.primitive.boolean(candidate);
    case 'array':
      return validate.array(candidate, dataType, models);
    case 'void':
      return validate.primitive.void(candidate);
    case 'File':
      return validate.primitive.file();
    default:
      // Assumed to be complex model
      var model = models[type];
      return validate.model(candidate, model, models);
  }
}
module.exports = validateDataType;
},{"./index":2}],5:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes'),
  ValidationError = errorTypes.ValidationError,
  ValidationErrors = errorTypes.ValidationErrors,
  MissingValueError = errorTypes.MissingValueError,
  validate = _dereq_('./index');

// http://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-clone-an-object
function clone(obj){
    if(obj === null || obj === undefined || typeof obj !== 'object') return obj;

    if(Array.isArray(obj)) return obj.slice();

    var temp = {};

    for(var key in obj)
        temp[key] = clone(obj[key]);
    return temp;
}

function addInhertiedProperties(model, modelId, models){
  var parent;

  Object.keys(models).some(function(modelName){
    var potentialParent = models[modelName];
    if (!potentialParent.subTypes) return;

    if(potentialParent.subTypes.indexOf(modelId) !== -1){
      parent = potentialParent;
      return true;
    }
  });

  if(!parent) return;

  for(var propertyName in parent.properties){
    model.properties[propertyName] = parent.properties[propertyName];
  }
  
  if(parent.required) model.required = model.required.concat(parent.required);

  addInhertiedProperties(model, parent.id, models);
}

function validateModel(candidate, model, models){
  if(candidate === null || typeof candidate !== 'object'){
    return new ValidationErrors(candidate, model);
  }

  models = models || {};

  model = clone(model);
  if(!model.required) model.required = [];
  addInhertiedProperties(model, model.id, models);

  var errors = [];

  model.required.forEach(function(propertyName){
    if (propertyName in candidate) return;

    var property = model.properties[propertyName];
    var error = new MissingValueError();
    errors.push(new ValidationError(propertyName, property, error));
  });

  Object.keys(candidate).forEach(function(propertyName){
    var property = model.properties[propertyName];

    var error = validate.dataType(candidate[propertyName], property, models);
    if(error){
      errors.push(new ValidationError(propertyName, property, error));
    }
  });
  
  if(errors.length){
    return new ValidationErrors(candidate, model.id, model, errors);
  }
}
module.exports = validateModel;
},{"./errorTypes":1,"./index":2}],6:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes'),
  ValidationError = errorTypes.ValidationError,
  ValidationErrors = errorTypes.ValidationErrors,
  MissingValueError = errorTypes.MissingValueError,
  validate = _dereq_('./index');

function validateOperation(candidate, operation, models){
  var errors = [];
  
  operation.parameters.forEach(function(param){
    if (!param.required) return;
    if (param.name in candidate) return;

    var error = new MissingValueError();
    errors.push(new ValidationError(param.name, param, error));
  });


  Object.keys(candidate).forEach(function(paramName){
    var parameter = operation.parameters.filter(function(param){
      return param.name === paramName;
    })[0];

    var error = validate.dataType(candidate[paramName], parameter, models);
    if(error){
      errors.push(new ValidationError(paramName, parameter, error));
    }
  });
  
  if(errors.length){
    return new ValidationErrors(candidate, operation.nickname, operation, errors);
  }
}
module.exports = validateOperation;
},{"./errorTypes":1,"./index":2}],7:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes');

function validateInteger(candidate, dataType){
  var error = validateNumber(candidate, dataType);
  if(error) return error;

  if(candidate % 1){
    return new errorTypes.NotAnIntegerError(candidate);
  }
}
exports.validateInteger = validateInteger;

function validateNumber(candidate, dataType){
  if(!(typeof candidate === 'number' || candidate instanceof Number) || isNaN(candidate)){
    return new errorTypes.NotANumberError(candidate, typeof candidate);
  }
  
  if(('minimum' in dataType) && candidate < parseInt(dataType.minimum, 10)){
    return new errorTypes.NumberTooSmallError(candidate, dataType.minimum);
  }
  
  if(('maximum' in dataType) && candidate > parseInt(dataType.maximum, 10)){
    return new errorTypes.NumberTooLargeError(candidate, dataType.maximum);
  }
}
exports.validateNumber = validateNumber;

function validateBoolean(candidate){
  if(!(typeof candidate === 'boolean' || candidate instanceof Boolean)){
    return new errorTypes.NotABooleanError(candidate, typeof candidate);
  }
}
exports.validateBoolean = validateBoolean;


function validateVoid(candidate){
  if(candidate != null){
    return new errorTypes.NotVoidError(candidate, typeof candidate);
  }
}
exports.validateVoid = validateVoid;

function validateFile(){
  // Not sure how to check this, since anything could qualify as 'File'.
}
exports.validateFile = validateFile;

function validateString(candidate, dataType){
  if(typeof candidate !== 'string' && !(candidate instanceof String)){
    return new errorTypes.NotAStringError(candidate, typeof candidate);
  }

  if('enum' in dataType){
    if(dataType.enum.indexOf(candidate) === -1) {
      return new errorTypes.StringNotInEnumError(candidate, dataType.enum);
    }
  }
}
exports.validateString = validateString;
},{"./errorTypes":1}],8:[function(_dereq_,module,exports){
'use strict';

var MissingAuthorizationError = _dereq_('./errorTypes').MissingAuthorizationError;

module.exports = function applyAuthData(operation, authData, request){
  var authMap = operation.authorizations;
  if(!authMap) authMap = operation.apiObject.apiDeclaration.authorizations;
  if(!authMap) return;

  var authNames = Object.keys(authMap).filter(function(authName){
    // Currently unable to handle oauth2
    return authMap[authName].type !== 'oauth2';
  });

  if(authNames.length === 0) return;

  if(authNames.length === 1){
    var authName = authNames[0];
    var auth = authMap[authName];

    if(!authData) throw new MissingAuthorizationError(authName, auth);

    // Unpack nested authData for single auth ops: { apiKey: '123' } -> '123'
    if(authData[authName]) authData = authData[authName];

    if(auth.type === 'apiKey'){
      applyApiKey(auth, authName, authData, request);
    } else if(auth.type === 'basicAuth') {
      applyBasicAuth(auth, authName, authData.username, authData.password, request);
    }
  } else {
    authNames.forEach(function(authName){
      var auth = authMap[authName];
      var data = authData[authName];

      if(!data) throw new MissingAuthorizationError(authName, auth);

      if(auth.type === 'apiKey'){
        applyApiKey(auth, authName, data, request);
      } else if(auth.type === 'basicAuth'){
        applyBasicAuth(auth, authName, data.username, data.password, request);
      }
    });
  }
};

function applyApiKey(auth, authName, apiKey, request){
  if(!apiKey) throw new MissingAuthorizationError(authName, auth);
  
  if(auth.passAs === 'header'){
    request.headers[auth.keyname] = apiKey;
  } else if(auth.passAs === 'query'){
    var url = request.url;
    var queryParam = auth.keyname + '=' + encodeURIComponent(apiKey);
    if(url.indexOf('?') === -1){
      url += '?' + queryParam;
    } else {
      url = url.replace('?', '?' + queryParam + '&');
    }

    request.url = url;
  }
}

function applyBasicAuth(auth, authName, username, password, request){
  if(!username || !password) throw new MissingAuthorizationError(authName, auth);
  
  var url = request.url;
  
  // Only add basic auth once
  if(url.indexOf('@') === -1){
    url = url.replace('://', '://' + username + ':' + password + '@');
  }

  request.url = url;
}
},{"./errorTypes":11}],9:[function(_dereq_,module,exports){
'use strict';

var createOperationHandler = _dereq_('./createOperationHandler');

function createClient(schema, requestHandler){
  var resources = processSchema(schema),
    api = {},
    apiAuthData;

  resources.forEach(function(resource){
    var resourceApiName = getResourceApiName(resource),
      resourceApi = api[resourceApiName] = {},
      resourceAuthData;

    resource.operations.forEach(function(operation){
      var operationHandlerName = operation.nickname,
        operationAuthData,
        operationHandler; 
      
      function getAuthData(){
        return operationAuthData || resourceAuthData || apiAuthData;
      }

      operationHandler = createOperationHandler(operation, getAuthData, requestHandler);

      operationHandler.auth = function(){
        operationAuthData = processApiAuthArgs(arguments);
      };

      resourceApi[operationHandlerName] = operationHandler;
    });

    if(!resourceApi.auth){
      resourceApi.auth = function(){
        resourceAuthData = processApiAuthArgs(arguments);
      };
    }
  });

  if(!api.auth) {
    api.auth = function(){
      apiAuthData = processApiAuthArgs(arguments);
    };
  }

  return api;
}
module.exports = createClient;

function processApiAuthArgs(args){
  // for basic auth, allow calls with two args (username, password)
  if(typeof args[0] === 'string' && typeof args[1] === 'string') {
    return {
      username: args[0],
      password: args[1]
    };
  } else {
    return args[0];
  }
}

// Helpper method which assings back pointer to object parents and returns
// the api objects within the given schema.
function processSchema(schema){
  var resources = [];
  
  schema.apis.forEach(function(resourceObject){
    resourceObject.resourceListing = schema;

    resourceObject.apiDeclaration.apis.forEach(function(apiObject){
      apiObject.resourceObject = resourceObject;
      apiObject.apiDeclaration = resourceObject.apiDeclaration;
      
      resources.push(apiObject);

      apiObject.operations.forEach(function(operation){
        operation.apiObject = apiObject;

        operation.parameters.forEach(function(parameter){
          parameter.operation = operation;
        });
      });
    });
  });

  return resources;
}

// Takes a path and returns a JavaScript-friendly variable name
function getResourceApiName(apiObject){
  var path = apiObject.apiDeclaration.resourcePath || apiObject.path;

  // String non-word characters
  path = path.replace(/\W/g, '/');

  // Turn paths which look/like/this to lookLikeThis
  path = path.replace(/(\w)\/(\w)/g, function(match, p1, p2){
    return p1 + p2.toUpperCase();
  });

  path = path.replace(/\//g, '');

  return path;
}
},{"./createOperationHandler":10}],10:[function(_dereq_,module,exports){
'use strict';

var getRequestHeaders = _dereq_('./getRequestHeaders'),
  getRequestUrl = _dereq_('./getRequestUrl'),
  getRequestBody = _dereq_('./getRequestBody'),
  applyAuthData = _dereq_('./applyAuthData'),
  errorTypes = _dereq_('./errorTypes'),
  swaggerValidate = _dereq_('swagger-validate');

var allErrorTypes = {};
Object.keys(swaggerValidate.errors).forEach(function(errorName){
  allErrorTypes[errorName] = swaggerValidate.errors[errorName];
});

Object.keys(errorTypes).forEach(function(errorName){
  allErrorTypes[errorName] = errorTypes[errorName];
});

function createOperationHandler(operation, getAuthData, requestHandler){
  function Request(data, options){
    this.method = operation.method;
    this.operation = operation;
    this.errorTypes = allErrorTypes;
    this.data = data;
    this.options = options;
  }

  var operationHandler = function(data, options){
    var error,
      request;
    
    options = options || {};
    
    if(data == null) data = {};

    // if a function is passed in as options, assume it's a callback function
    // for convenience
    if(typeof options === 'function'){
      options.callback = options;
    }

    try{
      data = singleParamConvenienceProcessor(operation, data);
      data = removeUnknownParams(operation, data);

      error = swaggerValidate.operation(data, operation, operation.apiObject.apiDeclaration.models);
      
      request = new Request(data, options);
      
      // If we know there is an error, don't attempt to craft the request params.
      // The request param generators assume valid data to work properly.
      if(!error){
        request.url = getRequestUrl(operation, data);
        request.headers = getRequestHeaders(operation, data, options);
        request.body = getRequestBody(operation, data, request.headers);
        
        applyAuthData(operation, getAuthData(), request);
      }
    } catch(e){
      error = e;
    }
    
    return requestHandler(error, request);
  };

  // Useful for instanceof checks
  operationHandler.Request = Request;
  operationHandler.errorTypes = allErrorTypes;

  // Useful for reflection
  operationHandler.operation = operation;
  
  // Can be used to preemptively validate without action
  operationHandler.validate = function(data){
    return swaggerValidate.operation(data, operation, operation.apiObject.apiDeclaration.models);
  };

  return operationHandler;
}
module.exports = createOperationHandler;

function noop(){}
createOperationHandler.logger = {
  debug: noop,
  info: noop,
  warn: noop,
  error: noop
};

// Enables data to be passed directly for single param operations.
function singleParamConvenienceProcessor(operation, data){
  // If there are more than one params, bail
  if(operation.parameters.length !== 1) return data;

  var param = operation.parameters[0];
  
  // If the param is already defined explicitly, bail
  if(typeof data === 'object' && (param.name in data)) return data;

  var models = operation.apiObject.apiDeclaration.models;

  // If the data passed is is not valid for the param data type, bail
  try {
    swaggerValidate.dataType(data, param, models); 
    var wrapper = {};
    wrapper[param.name] = data;
    return wrapper;
  } catch(e){
    return data;
  }
}

function removeUnknownParams(operation, data){
  if(!data || typeof data !== 'object') return data;

  var paramNames = {};
  operation.parameters.forEach(function(param){
    paramNames[param.name] = true;
  });

  var unknownKeys = Object.keys(data).filter(function(key){
    return !(key in paramNames);
  });

  createOperationHandler.logger.warn('Unknown parameters removed from request:', 
    unknownKeys.join(', '));

  unknownKeys.forEach(function(key){
    delete data[key];
  });

  return data;
}
},{"./applyAuthData":8,"./errorTypes":11,"./getRequestBody":12,"./getRequestHeaders":13,"./getRequestUrl":14,"swagger-validate":2}],11:[function(_dereq_,module,exports){
'use strict';

function InvalidRequestError(message){
  this.name = 'InvalidRequestError';
  this.message = message || 'Invalid request';
}
InvalidRequestError.prototype = Object.create(Error.prototype);
InvalidRequestError.prototype.constructor = InvalidRequestError;

exports.InvalidRequestError = InvalidRequestError;


function MissingAuthorizationError(authName, auth){
  this.name = 'MissingAuthorizationError';
  this.message = 'No data found for authorization: ' + authName;
  this.authorization = auth;
}
MissingAuthorizationError.prototype = Object.create(InvalidRequestError.prototype);
MissingAuthorizationError.prototype.constructor = MissingAuthorizationError;

exports.MissingAuthorizationError = MissingAuthorizationError;


function MissingPathParamsError(pathParams){
  this.name = 'MissingPathParamsError';
  this.message = 'Missing the following required path parameters: ' + pathParams.join('');
}
MissingPathParamsError.prototype = Object.create(InvalidRequestError.prototype);
MissingPathParamsError.prototype.constructor = MissingPathParamsError;

exports.MissingPathParamsError = MissingPathParamsError;


function ContentTypeNotSupportedError(contentType, operation){
  var apiDeclaration = operation.apiObject.apiDeclaration;
  var consumes = operation.consumes || apiDeclaration.consumes || [];

  this.name = 'ContentTypeNotSupportedError';
  this.message = 'Operation [' + operation.nickname + '] does not accept ' + contentType + '. It supports: ' + 
    consumes.join(', ');
}
ContentTypeNotSupportedError.prototype = Object.create(InvalidRequestError.prototype);
ContentTypeNotSupportedError.prototype.constructor = ContentTypeNotSupportedError;

exports.ContentTypeNotSupportedError = ContentTypeNotSupportedError;


function AcceptsNotSupportedError(accepts, operation){
  var apiDeclaration = operation.apiObject.apiDeclaration;
  var produces = operation.produces || apiDeclaration.produces || [];

  this.name = 'AcceptsNotSupportedError';
  this.message = 'Operation [' + operation.nickname + '] does not produce ' + accepts + '. It supports: ' + 
    produces.join(', ');
}
AcceptsNotSupportedError.prototype = Object.create(InvalidRequestError.prototype);
AcceptsNotSupportedError.prototype.constructor = AcceptsNotSupportedError;

exports.AcceptsNotSupportedError = AcceptsNotSupportedError;


function OperationValidationError(operation, errors){
  this.name = 'OperationValidationError';
  this.message = operation.nickname + ' failed validation: \n\t' + errors.join('\n\t');
}
OperationValidationError.prototype = Object.create(InvalidRequestError.prototype);
OperationValidationError.prototype.constructor = OperationValidationError;

exports.OperationValidationError = OperationValidationError;


function ParameterValidationError(parameter, errors){
  this.name = 'ParameterValidationError';
  this.message = parameter.name + ' failed validation: \n\t' + errors.join('\n\t');
}
ParameterValidationError.prototype = Object.create(InvalidRequestError.prototype);
ParameterValidationError.prototype.constructor = ParameterValidationError;

exports.ParameterValidationError = ParameterValidationError;


function DataTypeValidationError(message){
  this.name = 'DataTypeValidationError';
  this.message = message || 'Invalid data type';
}
DataTypeValidationError.prototype = Object.create(Error.prototype);
DataTypeValidationError.prototype.constructor = DataTypeValidationError;

exports.DataTypeValidationError = DataTypeValidationError;
},{}],12:[function(_dereq_,module,exports){
'use strict';

module.exports = function getRequestBody(operation, data, headers){
  var body = operation.parameters.filter(function(param){
    return param.paramType === 'body' && data[param.name] != null;
  }).map(function(param){
    return data[param.name];
  })[0];

  if(!(headers &&  headers['Content-Type'])) return body;

  var contentType = headers['Content-Type'];
  var presentFormParams = operation.parameters.filter(function(param){
    return param.paramType === 'form' && data[param.name] != null;
  });

  if(contentType.indexOf('application/x-www-form-urlencoded') !== -1){
    body = presentFormParams.map(function(param){
      var key = param.name,
        value = data[key];
      return encodeURIComponent(key) + '=' + encodeURIComponent(value);
    }).join('&');
  } else if(contentType.indexOf('multipart/form-data') !== -1){
    var randomness = Math.random().toString(16).substr(2);
    var boundary = 'SwaggerBoundary' + randomness;
    
    body = presentFormParams.map(function(param){
      var key = param.name,
        value = data[key],
        result = '--' + boundary;

      result += '\nContent-Disposition: form-data; name="' + key + '"';
      
      if(value.contentType){
        if(value.name){
          result += '; filename="' + value.name + '"';
        }

        result += '\nContent-Type: ' + value.contentType;
      }

      if(value.contentTransferEncoding){
        result += '\nContent-Transfer-Encoding: ' + value.contentTransferEncoding;
      }

      if(value.body){
        result += '\n\n' + value.body;
      } else {
        result += '\n\n' + value;
      }

      return result;
    }).join('\n');

    body += '\n--' + boundary + '--\n';
    
    headers['Content-Type'] = contentType.replace(
      'multipart/form-data', 
      'multipart/form-data; boundary=' + boundary
    );
  } else if(contentType.indexOf('application/json') !== -1){
    if(typeof body !== 'string'){
      body = JSON.stringify(body);
    }
  }

  return body;
};
},{}],13:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes'),
  ContentTypeNotSupportedError = errorTypes.ContentTypeNotSupportedError,
  AcceptsNotSupportedError = errorTypes.AcceptsNotSupportedError;

var DEFAULT_ACCEPT = 'application/json';
module.exports = function getRequestHeaders(operation, data, options){
  data = data || {};
  options = options || {};

  var headers = {};

  operation.parameters.forEach(function(param){
    if(param.paramType === 'header' && data[param.name] != null){
      headers[param.name] = data[param.name];
    }
  });

  // Passed headers
  if(options.headers){
    Object.keys(options.headers).forEach(function(key){
      headers[key] = options.headers[key];
    });
  }

  // Content-Type
  var contentType = options.contentType || getContentType(operation, data, options);
  if(contentType) {
    if(hasAccept(operation, contentType)){
      headers['Content-Type'] = contentType;  
    } else {
      throw new ContentTypeNotSupportedError(contentType, operation);
    }
  }

  // Accept
  var accept = options.accept || DEFAULT_ACCEPT;
  if(accept){
    if(hasContentType(operation, accept)){
      headers.Accept = accept;  
    } else {
      throw new AcceptsNotSupportedError(accept, operation);
    }
  }
  
  return headers;
};

function getContentType(operation, data){
  var hasBody = operation.parameters.some(function(param){
    return param.paramType === 'body' && (param.name in data);
  });

  if (hasBody){
    return 'application/json';
  } else {
    var hasFormParams = operation.parameters.some(function(param){
      return param.paramType === 'form' && (param.name in data);
    });

    var hasFileParam = hasFormParams && 
      operation.parameters.some(function(param){
        return param.type === 'File' && (param.name in data);
      });

    if(hasFileParam) return 'multipart/form-data';
    else if(hasFormParams) return 'application/x-www-form-urlencoded';
  }
}

// Accepts is an optional field in the spec, but must be enforced when present
function hasAccept(operation, contentType){
  var apiDeclaration = operation.apiObject.apiDeclaration;
  var accepts = operation.consumes || apiDeclaration.consumes;

  if(accepts && accepts.length){
    return accepts.indexOf(contentType) !== -1;
  } else {
    return true;
  }
}
exports.hasAccept = hasAccept;

// Content-Type (produces) is an optional field in the spec, but must be enforced when present
function hasContentType(operation, contentType){
  var apiDeclaration = operation.apiObject.apiDeclaration,
    contentTypes = operation.produces || apiDeclaration.produces;

  if(contentTypes && contentTypes.length){
    return contentTypes.indexOf(contentType) !== -1;
  } else {
    return true;
  }
}
exports.hasContentType = hasContentType;
},{"./errorTypes":11}],14:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes'),
  MissingPathParamsError = errorTypes.MissingPathParamsError;

module.exports = function getRequestUrl(operation, data){
  var url = getUrlTemplate(operation);

  url = applyPathParams(url, operation, data);

  if(!data) return url;

  var queryParams = operation.parameters.filter(function(param){
    return param.paramType === 'query' && data[param.name] !== undefined;
  }).map(function(param){
    var key = param.name;
    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
  }).join('&');

  if(queryParams) url += '?' + queryParams;

  return url;
};

function applyPathParams(url, operation, data){
  var pathParams = operation.parameters.filter(function(param){
    return param.paramType === 'path';
  });

  var missingParams = pathParams.filter(function(param){
    return data[param.name] === undefined;
  });

  if(missingParams.length){
    throw new MissingPathParamsError(missingParams.map(function(param){
      return param.name;
    }));
  }

  pathParams.forEach(function(param){
    var key = param.name;
    
    var exp = new RegExp('{' + key + '[^}]*}', 'gi');

    var value = data[key].toString();
    delete data[key];
    value = value.split('/').map(encodeURIComponent).join('/');

    url = url.replace(exp, value);
  });

  return url;
}

function getUrlTemplate(operation){
  var apiObject = operation.apiObject; 

  var basePath = apiObject.apiDeclaration.basePath;
  var path = apiObject.path.replace('{format}', 'json');
  
  return basePath + path;
}

},{"./errorTypes":11}]},{},[9])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9ib2lsZXJwbGF0ZS1ndWxwL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9ub2RlX21vZHVsZXMvc3dhZ2dlci12YWxpZGF0ZS9zcmMvZXJyb3JUeXBlcy5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy9pbmRleC5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy92YWxpZGF0ZUFycmF5LmpzIiwiL1VzZXJzL296YW4vY29kZS9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivbm9kZV9tb2R1bGVzL3N3YWdnZXItdmFsaWRhdGUvc3JjL3ZhbGlkYXRlRGF0YVR5cGUuanMiLCIvVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9ub2RlX21vZHVsZXMvc3dhZ2dlci12YWxpZGF0ZS9zcmMvdmFsaWRhdGVNb2RlbC5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy92YWxpZGF0ZU9wZXJhdGlvbi5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy92YWxpZGF0ZVByaW1pdGl2ZVR5cGVzLmpzIiwiL1VzZXJzL296YW4vY29kZS9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivc3JjL2FwcGx5QXV0aERhdGEuanMiLCIvVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9zcmMvY3JlYXRlQ2xpZW50LmpzIiwiL1VzZXJzL296YW4vY29kZS9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivc3JjL2NyZWF0ZU9wZXJhdGlvbkhhbmRsZXIuanMiLCIvVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9zcmMvZXJyb3JUeXBlcy5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9nZXRSZXF1ZXN0Qm9keS5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9nZXRSZXF1ZXN0SGVhZGVycy5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9nZXRSZXF1ZXN0VXJsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIERhdGFUeXBlVmFsaWRhdGlvbkVycm9yKG1lc3NhZ2Upe1xyXG4gIHRoaXMubmFtZSA9ICdEYXRhVHlwZVZhbGlkYXRpb25FcnJvcic7XHJcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnSW52YWxpZCBkYXRhIHR5cGUnO1xyXG59XHJcbkRhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcclxuRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3I7XHJcbmV4cG9ydHMuRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IgPSBEYXRhVHlwZVZhbGlkYXRpb25FcnJvcjtcclxuXHJcbmZ1bmN0aW9uIE5vdEFuSW50ZWdlckVycm9yKHZhbHVlKXtcclxuICB0aGlzLm5hbWUgPSAnTm90QW5JbnRlZ2VyRXJyb3InO1xyXG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYW4gaW50ZWdlcic7XHJcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG59XHJcbk5vdEFuSW50ZWdlckVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuTm90QW5JbnRlZ2VyRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTm90QW5JbnRlZ2VyRXJyb3I7XHJcbmV4cG9ydHMuTm90QW5JbnRlZ2VyRXJyb3IgPSBOb3RBbkludGVnZXJFcnJvcjtcclxuXHJcbmZ1bmN0aW9uIE5vdEFOdW1iZXJFcnJvcih2YWx1ZSwgYWN0dWFsVHlwZSl7XHJcbiAgdGhpcy5uYW1lID0gJ05vdEFOdW1iZXJFcnJvcic7XHJcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIG5vdCBhIG51bWJlcic7XHJcbiAgaWYoYWN0dWFsVHlwZSkgdGhpcy5tZXNzYWdlICs9ICcgKGdvdCBhICcgKyBhY3R1YWxUeXBlICsgJyBpbnN0ZWFkKSc7XHJcblxyXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxufVxyXG5Ob3RBTnVtYmVyRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xyXG5Ob3RBTnVtYmVyRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTm90QU51bWJlckVycm9yO1xyXG5leHBvcnRzLk5vdEFOdW1iZXJFcnJvciA9IE5vdEFOdW1iZXJFcnJvcjtcclxuXHJcbmZ1bmN0aW9uIE51bWJlclRvb0xhcmdlRXJyb3IodmFsdWUsIG1heCl7XHJcbiAgdGhpcy5uYW1lID0gJ051bWJlclRvb0xhcmdlRXJyb3InO1xyXG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBhYm92ZSB0aGUgbWF4aW11bSBvZiAnICsgbWF4LnRvU3RyaW5nKCk7XHJcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG59XHJcbk51bWJlclRvb0xhcmdlRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xyXG5OdW1iZXJUb29MYXJnZUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE51bWJlclRvb0xhcmdlRXJyb3I7XHJcbmV4cG9ydHMuTnVtYmVyVG9vTGFyZ2VFcnJvciA9IE51bWJlclRvb0xhcmdlRXJyb3I7XHJcblxyXG5mdW5jdGlvbiBOdW1iZXJUb29TbWFsbEVycm9yKHZhbHVlLCBtYXgpe1xyXG4gIHRoaXMubmFtZSA9ICdOdW1iZXJUb29TbWFsbEVycm9yJztcclxuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgYWJvdmUgdGhlIG1heGltdW0gb2YgJyArIG1heC50b1N0cmluZygpO1xyXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxufVxyXG5OdW1iZXJUb29TbWFsbEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuTnVtYmVyVG9vU21hbGxFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOdW1iZXJUb29TbWFsbEVycm9yO1xyXG5leHBvcnRzLk51bWJlclRvb1NtYWxsRXJyb3IgPSBOdW1iZXJUb29TbWFsbEVycm9yO1xyXG5cclxuZnVuY3Rpb24gTm90QUJvb2xlYW5FcnJvcih2YWx1ZSwgYWN0dWFsVHlwZSl7XHJcbiAgdGhpcy5uYW1lID0gJ05vdEFCb29sZWFuRXJyb3InO1xyXG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYSBib29sZWFuJztcclxuICBpZihhY3R1YWxUeXBlKSB0aGlzLm1lc3NhZ2UgKz0gJyAoZ290IGEgJyArIGFjdHVhbFR5cGUgKyAnIGluc3RlYWQpJztcclxuXHJcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG59XHJcbk5vdEFCb29sZWFuRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xyXG5Ob3RBQm9vbGVhbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5vdEFCb29sZWFuRXJyb3I7XHJcbmV4cG9ydHMuTm90QUJvb2xlYW5FcnJvciA9IE5vdEFCb29sZWFuRXJyb3I7XHJcblxyXG5mdW5jdGlvbiBOb3RBbkFycmF5RXJyb3IodmFsdWUsIGFjdHVhbFR5cGUpe1xyXG4gIHRoaXMubmFtZSA9ICdOb3RBbkFycmF5RXJyb3InO1xyXG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYW4gYXJyYXknO1xyXG4gIGlmKGFjdHVhbFR5cGUpIHRoaXMubWVzc2FnZSArPSAnIChnb3QgYSAnICsgYWN0dWFsVHlwZSArICcgaW5zdGVhZCknO1xyXG5cclxuICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbn1cclxuTm90QW5BcnJheUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuTm90QW5BcnJheUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5vdEFuQXJyYXlFcnJvcjtcclxuZXhwb3J0cy5Ob3RBbkFycmF5RXJyb3IgPSBOb3RBbkFycmF5RXJyb3I7XHJcblxyXG5mdW5jdGlvbiBEdXBsaWNhdGVJblNldEVycm9yKGFyciwgZHVwZXMpe1xyXG4gIHRoaXMubmFtZSA9ICdEdXBsaWNhdGVJblNldEVycm9yJztcclxuICB0aGlzLm1lc3NhZ2UgPSAnRHVwbGljYXRlcyAoXCInICsgZHVwZXMuam9pbignXCIsIFwiJykgKyAnXCIpIGZvdW5kIGluIHNldDogW1wiJyArIGFyci5qb2luKCdcIiwgXCInKSArICdcIic7XHJcbiAgdGhpcy5kdXBlcyA9IGR1cGVzO1xyXG4gIHRoaXMudmFsdWUgPSBhcnI7XHJcbn1cclxuRHVwbGljYXRlSW5TZXRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XHJcbkR1cGxpY2F0ZUluU2V0RXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRHVwbGljYXRlSW5TZXRFcnJvcjtcclxuZXhwb3J0cy5EdXBsaWNhdGVJblNldEVycm9yID0gRHVwbGljYXRlSW5TZXRFcnJvcjtcclxuXHJcbmZ1bmN0aW9uIE5vdFZvaWRFcnJvcih2YWx1ZSwgYWN0dWFsVHlwZSl7XHJcbiAgdGhpcy5uYW1lID0gJ05vdFZvaWRFcnJvcic7XHJcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZCc7XHJcbiAgaWYoYWN0dWFsVHlwZSkgdGhpcy5tZXNzYWdlICs9ICcgKGdvdCBhICcgKyBhY3R1YWxUeXBlICsgJyBpbnN0ZWFkKSc7XHJcblxyXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxufVxyXG5Ob3RWb2lkRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xyXG5Ob3RWb2lkRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTm90Vm9pZEVycm9yO1xyXG5leHBvcnRzLk5vdFZvaWRFcnJvciA9IE5vdFZvaWRFcnJvcjtcclxuXHJcbmZ1bmN0aW9uIE5vdEFTdHJpbmdFcnJvcih2YWx1ZSwgYWN0dWFsVHlwZSl7XHJcbiAgdGhpcy5uYW1lID0gJ05vdEFTdHJpbmdFcnJvcic7XHJcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIG5vdCBhIHN0cmluZyc7XHJcbiAgaWYoYWN0dWFsVHlwZSkgdGhpcy5tZXNzYWdlICs9ICcgKGdvdCBhICcgKyBhY3R1YWxUeXBlICsgJyBpbnN0ZWFkKSc7XHJcblxyXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxufVxyXG5Ob3RBU3RyaW5nRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xyXG5Ob3RBU3RyaW5nRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTm90QVN0cmluZ0Vycm9yO1xyXG5leHBvcnRzLk5vdEFTdHJpbmdFcnJvciA9IE5vdEFTdHJpbmdFcnJvcjtcclxuXHJcbmZ1bmN0aW9uIFN0cmluZ05vdEluRW51bUVycm9yKHZhbHVlLCBhY2NlcHRhYmxlVmFsdWVzKXtcclxuICB0aGlzLm5hbWUgPSAnU3RyaW5nTm90SW5FbnVtRXJyb3InO1xyXG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYW4gYWNjZXB0YWJsZSB2YWx1ZTogXCInICsgYWNjZXB0YWJsZVZhbHVlcy5qb2luKCdcIiwgXCInKSArICdcIic7XHJcbiBcclxuICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbn1cclxuU3RyaW5nTm90SW5FbnVtRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xyXG5TdHJpbmdOb3RJbkVudW1FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdHJpbmdOb3RJbkVudW1FcnJvcjtcclxuZXhwb3J0cy5TdHJpbmdOb3RJbkVudW1FcnJvciA9IFN0cmluZ05vdEluRW51bUVycm9yO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEVycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yKGVycm9ycyl7XHJcbiAgdGhpcy5uYW1lID0gJ0Vycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yJztcclxuICB0aGlzLm1lc3NhZ2UgPSAnRXJyb3JzIGluIGFycmF5IGVsZW1lbnRzOlxcblxcdCcgKyBlcnJvcnMuam9pbignLFxcblxcdCcpO1xyXG4gIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xyXG59XHJcbkVycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3I7XHJcbmV4cG9ydHMuRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3IgPSBFcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvcjtcclxuXHJcbmZ1bmN0aW9uIE1pc3NpbmdWYWx1ZUVycm9yKCl7XHJcbiAgdGhpcy5uYW1lID0gJ01pc3NpbmdWYWx1ZUVycm9yJztcclxuICBcclxuICB0aGlzLm1lc3NhZ2UgPSAnVGhpcyB2YWx1ZSBpcyByZXF1aXJlZCBidXQgbWlzc2luZyc7XHJcbn1cclxuTWlzc2luZ1ZhbHVlRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xyXG5NaXNzaW5nVmFsdWVFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNaXNzaW5nVmFsdWVFcnJvcjtcclxuZXhwb3J0cy5NaXNzaW5nVmFsdWVFcnJvciA9IE1pc3NpbmdWYWx1ZUVycm9yO1xyXG5cclxuZnVuY3Rpb24gVmFsaWRhdGlvbkVycm9yKHNwZWNOYW1lLCBzcGVjLCBlcnJvcil7XHJcbiAgdGhpcy5uYW1lID0gJ1ZhbGlkYXRpb25FcnJvcic7XHJcbiAgdGhpcy5zcGVjTmFtZSA9IHNwZWNOYW1lO1xyXG4gIHRoaXMuc3BlYyA9IHNwZWM7XHJcbiAgdGhpcy5lcnJvciA9IGVycm9yO1xyXG5cclxuICB0aGlzLm1lc3NhZ2UgPSBzcGVjTmFtZSArICcgaXMgaW52YWxpZDogJyArIGVycm9yLm1lc3NhZ2U7XHJcbn1cclxuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFZhbGlkYXRpb25FcnJvcjtcclxuZXhwb3J0cy5WYWxpZGF0aW9uRXJyb3IgPSBWYWxpZGF0aW9uRXJyb3I7XHJcblxyXG5mdW5jdGlvbiBWYWxpZGF0aW9uRXJyb3JzKHZhbHVlLCBzcGVjTmFtZSwgc3BlYywgZXJyb3JzKXtcclxuICB0aGlzLm5hbWUgPSAnVmFsaWRhdGlvbkVycm9ycyc7XHJcblxyXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB0aGlzLnNwZWNOYW1lID0gc3BlY05hbWU7XHJcbiAgdGhpcy5zcGVjID0gc3BlYztcclxuICB0aGlzLmVycm9ycyA9IGVycm9ycyB8fCBbXTtcclxuXHJcbiAgdGhpcy5tZXNzYWdlID0gc3BlY05hbWUgKyAnIGlzIGludmFsaWQnO1xyXG5cclxuICBpZih0aGlzLmVycm9ycy5sZW5ndGgpe1xyXG4gICAgdGhpcy5tZXNzYWdlICs9ICc6XFxuXFx0JyArIHRoaXMuZXJyb3JzLm1hcChmdW5jdGlvbihlKXsgcmV0dXJuIGUubWVzc2FnZTsgfSkuam9pbignXFxuXFx0Jyk7XHJcbiAgfVxyXG59XHJcblZhbGlkYXRpb25FcnJvcnMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xyXG5WYWxpZGF0aW9uRXJyb3JzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFZhbGlkYXRpb25FcnJvcnM7XHJcbmV4cG9ydHMuVmFsaWRhdGlvbkVycm9ycyA9IFZhbGlkYXRpb25FcnJvcnM7XHJcbiIsImV4cG9ydHMuZGF0YVR5cGUgPSByZXF1aXJlKCcuL3ZhbGlkYXRlRGF0YVR5cGUnKTtcclxuZXhwb3J0cy5tb2RlbCA9IHJlcXVpcmUoJy4vdmFsaWRhdGVNb2RlbCcpO1xyXG5leHBvcnRzLm9wZXJhdGlvbiA9IHJlcXVpcmUoJy4vdmFsaWRhdGVPcGVyYXRpb24nKTtcclxuZXhwb3J0cy5hcnJheSA9IHJlcXVpcmUoJy4vdmFsaWRhdGVBcnJheScpO1xyXG5leHBvcnRzLmVycm9ycyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpO1xyXG5cclxudmFyIHByaW1pdGl2ZXMgPSByZXF1aXJlKCcuL3ZhbGlkYXRlUHJpbWl0aXZlVHlwZXMnKTtcclxuZXhwb3J0cy5wcmltaXRpdmUgPSB7XHJcbiAgaW50ZWdlcjogcHJpbWl0aXZlcy52YWxpZGF0ZUludGVnZXIsXHJcbiAgbnVtYmVyOiBwcmltaXRpdmVzLnZhbGlkYXRlTnVtYmVyLFxyXG4gIHN0cmluZzogcHJpbWl0aXZlcy52YWxpZGF0ZVN0cmluZyxcclxuICBib29sZWFuOiBwcmltaXRpdmVzLnZhbGlkYXRlQm9vbGVhbixcclxuICB2b2lkOiBwcmltaXRpdmVzLnZhbGlkYXRlVm9pZCxcclxuICBmaWxlOiBwcmltaXRpdmVzLnZhbGlkYXRlRmlsZVxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgZXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLFxyXG4gIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9pbmRleCcpO1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVBcnJheShjYW5kaWRhdGUsIGRhdGFUeXBlLCBtb2RlbHMpe1xyXG4gIGlmKCFBcnJheS5pc0FycmF5KGNhbmRpZGF0ZSkpe1xyXG4gICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLk5vdEFuQXJyYXlFcnJvcihjYW5kaWRhdGUsIHR5cGVvZiBjYW5kaWRhdGUpO1xyXG4gIH1cclxuXHJcbiAgdmFyIGl0ZW1zID0gZGF0YVR5cGUuaXRlbXM7XHJcblxyXG4gIGlmKGRhdGFUeXBlLnVuaXF1ZUl0ZW1zKXtcclxuICAgIHZhciBkdXBlQ2hlY2sgPSBbXTtcclxuICAgIHZhciBkdXBlcyA9IGNhbmRpZGF0ZS5maWx0ZXIoZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICB2YXIgc2lnbmF0dXJlO1xyXG4gICAgICBpZihpdGVtcy4kcmVmKXtcclxuICAgICAgICBzaWduYXR1cmUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2lnbmF0dXJlID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYoZHVwZUNoZWNrLmluZGV4T2Yoc2lnbmF0dXJlKSAhPT0gLTEpe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGR1cGVDaGVjay5wdXNoKHNpZ25hdHVyZSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZihkdXBlcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLkR1cGxpY2F0ZUluU2V0RXJyb3IoY2FuZGlkYXRlLCBkdXBlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgZXJyb3JzO1xyXG5cclxuICBpZihpdGVtcy4kcmVmKXtcclxuICAgIHZhciBtb2RlbCA9IG1vZGVsc1tpdGVtcy4kcmVmXTtcclxuICAgIGVycm9ycyA9IGNhbmRpZGF0ZS5maWx0ZXIoZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICByZXR1cm4gdmFsaWRhdGUubW9kZWwodmFsdWUsIG1vZGVsLCBtb2RlbHMpO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVycm9ycyA9IGNhbmRpZGF0ZS5maWx0ZXIoZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICByZXR1cm4gdmFsaWRhdGUuZGF0YVR5cGUodmFsdWUsIGl0ZW1zLCBtb2RlbHMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZihlcnJvcnMubGVuZ3RoKXtcclxuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5FcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvcihlcnJvcnMpO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlQXJyYXk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9pbmRleCcpO1xyXG4gIFxyXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGFUeXBlKGNhbmRpZGF0ZSwgZGF0YVR5cGUsIG1vZGVscyl7XHJcbiAgbW9kZWxzID0gbW9kZWxzIHx8IHt9O1xyXG4gICAgICBcclxuICB2YXIgdHlwZSA9IGRhdGFUeXBlLnR5cGUgfHwgZGF0YVR5cGUuZGF0YVR5cGUgfHwgZGF0YVR5cGUuJHJlZjtcclxuXHJcbiAgc3dpdGNoKHR5cGUpe1xyXG4gICAgY2FzZSAnaW50ZWdlcic6XHJcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUuaW50ZWdlcihjYW5kaWRhdGUsIGRhdGFUeXBlKTtcclxuICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUubnVtYmVyKGNhbmRpZGF0ZSwgZGF0YVR5cGUpO1xyXG4gICAgY2FzZSAnc3RyaW5nJzpcclxuICAgICAgcmV0dXJuIHZhbGlkYXRlLnByaW1pdGl2ZS5zdHJpbmcoY2FuZGlkYXRlLCBkYXRhVHlwZSk7XHJcbiAgICBjYXNlICdib29sZWFuJzpcclxuICAgICAgcmV0dXJuIHZhbGlkYXRlLnByaW1pdGl2ZS5ib29sZWFuKGNhbmRpZGF0ZSk7XHJcbiAgICBjYXNlICdhcnJheSc6XHJcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5hcnJheShjYW5kaWRhdGUsIGRhdGFUeXBlLCBtb2RlbHMpO1xyXG4gICAgY2FzZSAndm9pZCc6XHJcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUudm9pZChjYW5kaWRhdGUpO1xyXG4gICAgY2FzZSAnRmlsZSc6XHJcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUuZmlsZSgpO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgLy8gQXNzdW1lZCB0byBiZSBjb21wbGV4IG1vZGVsXHJcbiAgICAgIHZhciBtb2RlbCA9IG1vZGVsc1t0eXBlXTtcclxuICAgICAgcmV0dXJuIHZhbGlkYXRlLm1vZGVsKGNhbmRpZGF0ZSwgbW9kZWwsIG1vZGVscyk7XHJcbiAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVEYXRhVHlwZTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgZXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLFxyXG4gIFZhbGlkYXRpb25FcnJvciA9IGVycm9yVHlwZXMuVmFsaWRhdGlvbkVycm9yLFxyXG4gIFZhbGlkYXRpb25FcnJvcnMgPSBlcnJvclR5cGVzLlZhbGlkYXRpb25FcnJvcnMsXHJcbiAgTWlzc2luZ1ZhbHVlRXJyb3IgPSBlcnJvclR5cGVzLk1pc3NpbmdWYWx1ZUVycm9yLFxyXG4gIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9pbmRleCcpO1xyXG5cclxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMjIxMDIvd2hhdC1pcy10aGUtbW9zdC1lZmZpY2llbnQtd2F5LXRvLWNsb25lLWFuLW9iamVjdFxyXG5mdW5jdGlvbiBjbG9uZShvYmope1xyXG4gICAgaWYob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSByZXR1cm4gb2JqO1xyXG5cclxuICAgIGlmKEFycmF5LmlzQXJyYXkob2JqKSkgcmV0dXJuIG9iai5zbGljZSgpO1xyXG5cclxuICAgIHZhciB0ZW1wID0ge307XHJcblxyXG4gICAgZm9yKHZhciBrZXkgaW4gb2JqKVxyXG4gICAgICAgIHRlbXBba2V5XSA9IGNsb25lKG9ialtrZXldKTtcclxuICAgIHJldHVybiB0ZW1wO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRJbmhlcnRpZWRQcm9wZXJ0aWVzKG1vZGVsLCBtb2RlbElkLCBtb2RlbHMpe1xyXG4gIHZhciBwYXJlbnQ7XHJcblxyXG4gIE9iamVjdC5rZXlzKG1vZGVscykuc29tZShmdW5jdGlvbihtb2RlbE5hbWUpe1xyXG4gICAgdmFyIHBvdGVudGlhbFBhcmVudCA9IG1vZGVsc1ttb2RlbE5hbWVdO1xyXG4gICAgaWYgKCFwb3RlbnRpYWxQYXJlbnQuc3ViVHlwZXMpIHJldHVybjtcclxuXHJcbiAgICBpZihwb3RlbnRpYWxQYXJlbnQuc3ViVHlwZXMuaW5kZXhPZihtb2RlbElkKSAhPT0gLTEpe1xyXG4gICAgICBwYXJlbnQgPSBwb3RlbnRpYWxQYXJlbnQ7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpZighcGFyZW50KSByZXR1cm47XHJcblxyXG4gIGZvcih2YXIgcHJvcGVydHlOYW1lIGluIHBhcmVudC5wcm9wZXJ0aWVzKXtcclxuICAgIG1vZGVsLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSA9IHBhcmVudC5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XHJcbiAgfVxyXG4gIFxyXG4gIGlmKHBhcmVudC5yZXF1aXJlZCkgbW9kZWwucmVxdWlyZWQgPSBtb2RlbC5yZXF1aXJlZC5jb25jYXQocGFyZW50LnJlcXVpcmVkKTtcclxuXHJcbiAgYWRkSW5oZXJ0aWVkUHJvcGVydGllcyhtb2RlbCwgcGFyZW50LmlkLCBtb2RlbHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZU1vZGVsKGNhbmRpZGF0ZSwgbW9kZWwsIG1vZGVscyl7XHJcbiAgaWYoY2FuZGlkYXRlID09PSBudWxsIHx8IHR5cGVvZiBjYW5kaWRhdGUgIT09ICdvYmplY3QnKXtcclxuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvbkVycm9ycyhjYW5kaWRhdGUsIG1vZGVsKTtcclxuICB9XHJcblxyXG4gIG1vZGVscyA9IG1vZGVscyB8fCB7fTtcclxuXHJcbiAgbW9kZWwgPSBjbG9uZShtb2RlbCk7XHJcbiAgaWYoIW1vZGVsLnJlcXVpcmVkKSBtb2RlbC5yZXF1aXJlZCA9IFtdO1xyXG4gIGFkZEluaGVydGllZFByb3BlcnRpZXMobW9kZWwsIG1vZGVsLmlkLCBtb2RlbHMpO1xyXG5cclxuICB2YXIgZXJyb3JzID0gW107XHJcblxyXG4gIG1vZGVsLnJlcXVpcmVkLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHlOYW1lKXtcclxuICAgIGlmIChwcm9wZXJ0eU5hbWUgaW4gY2FuZGlkYXRlKSByZXR1cm47XHJcblxyXG4gICAgdmFyIHByb3BlcnR5ID0gbW9kZWwucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xyXG4gICAgdmFyIGVycm9yID0gbmV3IE1pc3NpbmdWYWx1ZUVycm9yKCk7XHJcbiAgICBlcnJvcnMucHVzaChuZXcgVmFsaWRhdGlvbkVycm9yKHByb3BlcnR5TmFtZSwgcHJvcGVydHksIGVycm9yKSk7XHJcbiAgfSk7XHJcblxyXG4gIE9iamVjdC5rZXlzKGNhbmRpZGF0ZSkuZm9yRWFjaChmdW5jdGlvbihwcm9wZXJ0eU5hbWUpe1xyXG4gICAgdmFyIHByb3BlcnR5ID0gbW9kZWwucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xyXG5cclxuICAgIHZhciBlcnJvciA9IHZhbGlkYXRlLmRhdGFUeXBlKGNhbmRpZGF0ZVtwcm9wZXJ0eU5hbWVdLCBwcm9wZXJ0eSwgbW9kZWxzKTtcclxuICAgIGlmKGVycm9yKXtcclxuICAgICAgZXJyb3JzLnB1c2gobmV3IFZhbGlkYXRpb25FcnJvcihwcm9wZXJ0eU5hbWUsIHByb3BlcnR5LCBlcnJvcikpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gIGlmKGVycm9ycy5sZW5ndGgpe1xyXG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uRXJyb3JzKGNhbmRpZGF0ZSwgbW9kZWwuaWQsIG1vZGVsLCBlcnJvcnMpO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlTW9kZWw7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGVycm9yVHlwZXMgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKSxcclxuICBWYWxpZGF0aW9uRXJyb3IgPSBlcnJvclR5cGVzLlZhbGlkYXRpb25FcnJvcixcclxuICBWYWxpZGF0aW9uRXJyb3JzID0gZXJyb3JUeXBlcy5WYWxpZGF0aW9uRXJyb3JzLFxyXG4gIE1pc3NpbmdWYWx1ZUVycm9yID0gZXJyb3JUeXBlcy5NaXNzaW5nVmFsdWVFcnJvcixcclxuICB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlT3BlcmF0aW9uKGNhbmRpZGF0ZSwgb3BlcmF0aW9uLCBtb2RlbHMpe1xyXG4gIHZhciBlcnJvcnMgPSBbXTtcclxuICBcclxuICBvcGVyYXRpb24ucGFyYW1ldGVycy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKXtcclxuICAgIGlmICghcGFyYW0ucmVxdWlyZWQpIHJldHVybjtcclxuICAgIGlmIChwYXJhbS5uYW1lIGluIGNhbmRpZGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgIHZhciBlcnJvciA9IG5ldyBNaXNzaW5nVmFsdWVFcnJvcigpO1xyXG4gICAgZXJyb3JzLnB1c2gobmV3IFZhbGlkYXRpb25FcnJvcihwYXJhbS5uYW1lLCBwYXJhbSwgZXJyb3IpKTtcclxuICB9KTtcclxuXHJcblxyXG4gIE9iamVjdC5rZXlzKGNhbmRpZGF0ZSkuZm9yRWFjaChmdW5jdGlvbihwYXJhbU5hbWUpe1xyXG4gICAgdmFyIHBhcmFtZXRlciA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XHJcbiAgICAgIHJldHVybiBwYXJhbS5uYW1lID09PSBwYXJhbU5hbWU7XHJcbiAgICB9KVswXTtcclxuXHJcbiAgICB2YXIgZXJyb3IgPSB2YWxpZGF0ZS5kYXRhVHlwZShjYW5kaWRhdGVbcGFyYW1OYW1lXSwgcGFyYW1ldGVyLCBtb2RlbHMpO1xyXG4gICAgaWYoZXJyb3Ipe1xyXG4gICAgICBlcnJvcnMucHVzaChuZXcgVmFsaWRhdGlvbkVycm9yKHBhcmFtTmFtZSwgcGFyYW1ldGVyLCBlcnJvcikpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gIGlmKGVycm9ycy5sZW5ndGgpe1xyXG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uRXJyb3JzKGNhbmRpZGF0ZSwgb3BlcmF0aW9uLm5pY2tuYW1lLCBvcGVyYXRpb24sIGVycm9ycyk7XHJcbiAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVPcGVyYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGVycm9yVHlwZXMgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKTtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlSW50ZWdlcihjYW5kaWRhdGUsIGRhdGFUeXBlKXtcclxuICB2YXIgZXJyb3IgPSB2YWxpZGF0ZU51bWJlcihjYW5kaWRhdGUsIGRhdGFUeXBlKTtcclxuICBpZihlcnJvcikgcmV0dXJuIGVycm9yO1xyXG5cclxuICBpZihjYW5kaWRhdGUgJSAxKXtcclxuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5Ob3RBbkludGVnZXJFcnJvcihjYW5kaWRhdGUpO1xyXG4gIH1cclxufVxyXG5leHBvcnRzLnZhbGlkYXRlSW50ZWdlciA9IHZhbGlkYXRlSW50ZWdlcjtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlTnVtYmVyKGNhbmRpZGF0ZSwgZGF0YVR5cGUpe1xyXG4gIGlmKCEodHlwZW9mIGNhbmRpZGF0ZSA9PT0gJ251bWJlcicgfHwgY2FuZGlkYXRlIGluc3RhbmNlb2YgTnVtYmVyKSB8fCBpc05hTihjYW5kaWRhdGUpKXtcclxuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5Ob3RBTnVtYmVyRXJyb3IoY2FuZGlkYXRlLCB0eXBlb2YgY2FuZGlkYXRlKTtcclxuICB9XHJcbiAgXHJcbiAgaWYoKCdtaW5pbXVtJyBpbiBkYXRhVHlwZSkgJiYgY2FuZGlkYXRlIDwgcGFyc2VJbnQoZGF0YVR5cGUubWluaW11bSwgMTApKXtcclxuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5OdW1iZXJUb29TbWFsbEVycm9yKGNhbmRpZGF0ZSwgZGF0YVR5cGUubWluaW11bSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlmKCgnbWF4aW11bScgaW4gZGF0YVR5cGUpICYmIGNhbmRpZGF0ZSA+IHBhcnNlSW50KGRhdGFUeXBlLm1heGltdW0sIDEwKSl7XHJcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTnVtYmVyVG9vTGFyZ2VFcnJvcihjYW5kaWRhdGUsIGRhdGFUeXBlLm1heGltdW0pO1xyXG4gIH1cclxufVxyXG5leHBvcnRzLnZhbGlkYXRlTnVtYmVyID0gdmFsaWRhdGVOdW1iZXI7XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUJvb2xlYW4oY2FuZGlkYXRlKXtcclxuICBpZighKHR5cGVvZiBjYW5kaWRhdGUgPT09ICdib29sZWFuJyB8fCBjYW5kaWRhdGUgaW5zdGFuY2VvZiBCb29sZWFuKSl7XHJcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTm90QUJvb2xlYW5FcnJvcihjYW5kaWRhdGUsIHR5cGVvZiBjYW5kaWRhdGUpO1xyXG4gIH1cclxufVxyXG5leHBvcnRzLnZhbGlkYXRlQm9vbGVhbiA9IHZhbGlkYXRlQm9vbGVhbjtcclxuXHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVZvaWQoY2FuZGlkYXRlKXtcclxuICBpZihjYW5kaWRhdGUgIT0gbnVsbCl7XHJcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTm90Vm9pZEVycm9yKGNhbmRpZGF0ZSwgdHlwZW9mIGNhbmRpZGF0ZSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydHMudmFsaWRhdGVWb2lkID0gdmFsaWRhdGVWb2lkO1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVGaWxlKCl7XHJcbiAgLy8gTm90IHN1cmUgaG93IHRvIGNoZWNrIHRoaXMsIHNpbmNlIGFueXRoaW5nIGNvdWxkIHF1YWxpZnkgYXMgJ0ZpbGUnLlxyXG59XHJcbmV4cG9ydHMudmFsaWRhdGVGaWxlID0gdmFsaWRhdGVGaWxlO1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmcoY2FuZGlkYXRlLCBkYXRhVHlwZSl7XHJcbiAgaWYodHlwZW9mIGNhbmRpZGF0ZSAhPT0gJ3N0cmluZycgJiYgIShjYW5kaWRhdGUgaW5zdGFuY2VvZiBTdHJpbmcpKXtcclxuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5Ob3RBU3RyaW5nRXJyb3IoY2FuZGlkYXRlLCB0eXBlb2YgY2FuZGlkYXRlKTtcclxuICB9XHJcblxyXG4gIGlmKCdlbnVtJyBpbiBkYXRhVHlwZSl7XHJcbiAgICBpZihkYXRhVHlwZS5lbnVtLmluZGV4T2YoY2FuZGlkYXRlKSA9PT0gLTEpIHtcclxuICAgICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLlN0cmluZ05vdEluRW51bUVycm9yKGNhbmRpZGF0ZSwgZGF0YVR5cGUuZW51bSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydHMudmFsaWRhdGVTdHJpbmcgPSB2YWxpZGF0ZVN0cmluZzsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBNaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJykuTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhcHBseUF1dGhEYXRhKG9wZXJhdGlvbiwgYXV0aERhdGEsIHJlcXVlc3Qpe1xuICB2YXIgYXV0aE1hcCA9IG9wZXJhdGlvbi5hdXRob3JpemF0aW9ucztcbiAgaWYoIWF1dGhNYXApIGF1dGhNYXAgPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uLmF1dGhvcml6YXRpb25zO1xuICBpZighYXV0aE1hcCkgcmV0dXJuO1xuXG4gIHZhciBhdXRoTmFtZXMgPSBPYmplY3Qua2V5cyhhdXRoTWFwKS5maWx0ZXIoZnVuY3Rpb24oYXV0aE5hbWUpe1xuICAgIC8vIEN1cnJlbnRseSB1bmFibGUgdG8gaGFuZGxlIG9hdXRoMlxuICAgIHJldHVybiBhdXRoTWFwW2F1dGhOYW1lXS50eXBlICE9PSAnb2F1dGgyJztcbiAgfSk7XG5cbiAgaWYoYXV0aE5hbWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gIGlmKGF1dGhOYW1lcy5sZW5ndGggPT09IDEpe1xuICAgIHZhciBhdXRoTmFtZSA9IGF1dGhOYW1lc1swXTtcbiAgICB2YXIgYXV0aCA9IGF1dGhNYXBbYXV0aE5hbWVdO1xuXG4gICAgaWYoIWF1dGhEYXRhKSB0aHJvdyBuZXcgTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcihhdXRoTmFtZSwgYXV0aCk7XG5cbiAgICAvLyBVbnBhY2sgbmVzdGVkIGF1dGhEYXRhIGZvciBzaW5nbGUgYXV0aCBvcHM6IHsgYXBpS2V5OiAnMTIzJyB9IC0+ICcxMjMnXG4gICAgaWYoYXV0aERhdGFbYXV0aE5hbWVdKSBhdXRoRGF0YSA9IGF1dGhEYXRhW2F1dGhOYW1lXTtcblxuICAgIGlmKGF1dGgudHlwZSA9PT0gJ2FwaUtleScpe1xuICAgICAgYXBwbHlBcGlLZXkoYXV0aCwgYXV0aE5hbWUsIGF1dGhEYXRhLCByZXF1ZXN0KTtcbiAgICB9IGVsc2UgaWYoYXV0aC50eXBlID09PSAnYmFzaWNBdXRoJykge1xuICAgICAgYXBwbHlCYXNpY0F1dGgoYXV0aCwgYXV0aE5hbWUsIGF1dGhEYXRhLnVzZXJuYW1lLCBhdXRoRGF0YS5wYXNzd29yZCwgcmVxdWVzdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGF1dGhOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGF1dGhOYW1lKXtcbiAgICAgIHZhciBhdXRoID0gYXV0aE1hcFthdXRoTmFtZV07XG4gICAgICB2YXIgZGF0YSA9IGF1dGhEYXRhW2F1dGhOYW1lXTtcblxuICAgICAgaWYoIWRhdGEpIHRocm93IG5ldyBNaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yKGF1dGhOYW1lLCBhdXRoKTtcblxuICAgICAgaWYoYXV0aC50eXBlID09PSAnYXBpS2V5Jyl7XG4gICAgICAgIGFwcGx5QXBpS2V5KGF1dGgsIGF1dGhOYW1lLCBkYXRhLCByZXF1ZXN0KTtcbiAgICAgIH0gZWxzZSBpZihhdXRoLnR5cGUgPT09ICdiYXNpY0F1dGgnKXtcbiAgICAgICAgYXBwbHlCYXNpY0F1dGgoYXV0aCwgYXV0aE5hbWUsIGRhdGEudXNlcm5hbWUsIGRhdGEucGFzc3dvcmQsIHJlcXVlc3QpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBhcHBseUFwaUtleShhdXRoLCBhdXRoTmFtZSwgYXBpS2V5LCByZXF1ZXN0KXtcbiAgaWYoIWFwaUtleSkgdGhyb3cgbmV3IE1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IoYXV0aE5hbWUsIGF1dGgpO1xuICBcbiAgaWYoYXV0aC5wYXNzQXMgPT09ICdoZWFkZXInKXtcbiAgICByZXF1ZXN0LmhlYWRlcnNbYXV0aC5rZXluYW1lXSA9IGFwaUtleTtcbiAgfSBlbHNlIGlmKGF1dGgucGFzc0FzID09PSAncXVlcnknKXtcbiAgICB2YXIgdXJsID0gcmVxdWVzdC51cmw7XG4gICAgdmFyIHF1ZXJ5UGFyYW0gPSBhdXRoLmtleW5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoYXBpS2V5KTtcbiAgICBpZih1cmwuaW5kZXhPZignPycpID09PSAtMSl7XG4gICAgICB1cmwgKz0gJz8nICsgcXVlcnlQYXJhbTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gdXJsLnJlcGxhY2UoJz8nLCAnPycgKyBxdWVyeVBhcmFtICsgJyYnKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0LnVybCA9IHVybDtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseUJhc2ljQXV0aChhdXRoLCBhdXRoTmFtZSwgdXNlcm5hbWUsIHBhc3N3b3JkLCByZXF1ZXN0KXtcbiAgaWYoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCkgdGhyb3cgbmV3IE1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IoYXV0aE5hbWUsIGF1dGgpO1xuICBcbiAgdmFyIHVybCA9IHJlcXVlc3QudXJsO1xuICBcbiAgLy8gT25seSBhZGQgYmFzaWMgYXV0aCBvbmNlXG4gIGlmKHVybC5pbmRleE9mKCdAJykgPT09IC0xKXtcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgnOi8vJywgJzovLycgKyB1c2VybmFtZSArICc6JyArIHBhc3N3b3JkICsgJ0AnKTtcbiAgfVxuXG4gIHJlcXVlc3QudXJsID0gdXJsO1xufSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZU9wZXJhdGlvbkhhbmRsZXIgPSByZXF1aXJlKCcuL2NyZWF0ZU9wZXJhdGlvbkhhbmRsZXInKTtcblxuZnVuY3Rpb24gY3JlYXRlQ2xpZW50KHNjaGVtYSwgcmVxdWVzdEhhbmRsZXIpe1xuICB2YXIgcmVzb3VyY2VzID0gcHJvY2Vzc1NjaGVtYShzY2hlbWEpLFxuICAgIGFwaSA9IHt9LFxuICAgIGFwaUF1dGhEYXRhO1xuXG4gIHJlc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uKHJlc291cmNlKXtcbiAgICB2YXIgcmVzb3VyY2VBcGlOYW1lID0gZ2V0UmVzb3VyY2VBcGlOYW1lKHJlc291cmNlKSxcbiAgICAgIHJlc291cmNlQXBpID0gYXBpW3Jlc291cmNlQXBpTmFtZV0gPSB7fSxcbiAgICAgIHJlc291cmNlQXV0aERhdGE7XG5cbiAgICByZXNvdXJjZS5vcGVyYXRpb25zLmZvckVhY2goZnVuY3Rpb24ob3BlcmF0aW9uKXtcbiAgICAgIHZhciBvcGVyYXRpb25IYW5kbGVyTmFtZSA9IG9wZXJhdGlvbi5uaWNrbmFtZSxcbiAgICAgICAgb3BlcmF0aW9uQXV0aERhdGEsXG4gICAgICAgIG9wZXJhdGlvbkhhbmRsZXI7IFxuICAgICAgXG4gICAgICBmdW5jdGlvbiBnZXRBdXRoRGF0YSgpe1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uQXV0aERhdGEgfHwgcmVzb3VyY2VBdXRoRGF0YSB8fCBhcGlBdXRoRGF0YTtcbiAgICAgIH1cblxuICAgICAgb3BlcmF0aW9uSGFuZGxlciA9IGNyZWF0ZU9wZXJhdGlvbkhhbmRsZXIob3BlcmF0aW9uLCBnZXRBdXRoRGF0YSwgcmVxdWVzdEhhbmRsZXIpO1xuXG4gICAgICBvcGVyYXRpb25IYW5kbGVyLmF1dGggPSBmdW5jdGlvbigpe1xuICAgICAgICBvcGVyYXRpb25BdXRoRGF0YSA9IHByb2Nlc3NBcGlBdXRoQXJncyhhcmd1bWVudHMpO1xuICAgICAgfTtcblxuICAgICAgcmVzb3VyY2VBcGlbb3BlcmF0aW9uSGFuZGxlck5hbWVdID0gb3BlcmF0aW9uSGFuZGxlcjtcbiAgICB9KTtcblxuICAgIGlmKCFyZXNvdXJjZUFwaS5hdXRoKXtcbiAgICAgIHJlc291cmNlQXBpLmF1dGggPSBmdW5jdGlvbigpe1xuICAgICAgICByZXNvdXJjZUF1dGhEYXRhID0gcHJvY2Vzc0FwaUF1dGhBcmdzKGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG5cbiAgaWYoIWFwaS5hdXRoKSB7XG4gICAgYXBpLmF1dGggPSBmdW5jdGlvbigpe1xuICAgICAgYXBpQXV0aERhdGEgPSBwcm9jZXNzQXBpQXV0aEFyZ3MoYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGFwaTtcbn1cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ2xpZW50O1xuXG5mdW5jdGlvbiBwcm9jZXNzQXBpQXV0aEFyZ3MoYXJncyl7XG4gIC8vIGZvciBiYXNpYyBhdXRoLCBhbGxvdyBjYWxscyB3aXRoIHR3byBhcmdzICh1c2VybmFtZSwgcGFzc3dvcmQpXG4gIGlmKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgYXJnc1sxXSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcm5hbWU6IGFyZ3NbMF0sXG4gICAgICBwYXNzd29yZDogYXJnc1sxXVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFyZ3NbMF07XG4gIH1cbn1cblxuLy8gSGVscHBlciBtZXRob2Qgd2hpY2ggYXNzaW5ncyBiYWNrIHBvaW50ZXIgdG8gb2JqZWN0IHBhcmVudHMgYW5kIHJldHVybnNcbi8vIHRoZSBhcGkgb2JqZWN0cyB3aXRoaW4gdGhlIGdpdmVuIHNjaGVtYS5cbmZ1bmN0aW9uIHByb2Nlc3NTY2hlbWEoc2NoZW1hKXtcbiAgdmFyIHJlc291cmNlcyA9IFtdO1xuICBcbiAgc2NoZW1hLmFwaXMuZm9yRWFjaChmdW5jdGlvbihyZXNvdXJjZU9iamVjdCl7XG4gICAgcmVzb3VyY2VPYmplY3QucmVzb3VyY2VMaXN0aW5nID0gc2NoZW1hO1xuXG4gICAgcmVzb3VyY2VPYmplY3QuYXBpRGVjbGFyYXRpb24uYXBpcy5mb3JFYWNoKGZ1bmN0aW9uKGFwaU9iamVjdCl7XG4gICAgICBhcGlPYmplY3QucmVzb3VyY2VPYmplY3QgPSByZXNvdXJjZU9iamVjdDtcbiAgICAgIGFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbiA9IHJlc291cmNlT2JqZWN0LmFwaURlY2xhcmF0aW9uO1xuICAgICAgXG4gICAgICByZXNvdXJjZXMucHVzaChhcGlPYmplY3QpO1xuXG4gICAgICBhcGlPYmplY3Qub3BlcmF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG9wZXJhdGlvbil7XG4gICAgICAgIG9wZXJhdGlvbi5hcGlPYmplY3QgPSBhcGlPYmplY3Q7XG5cbiAgICAgICAgb3BlcmF0aW9uLnBhcmFtZXRlcnMuZm9yRWFjaChmdW5jdGlvbihwYXJhbWV0ZXIpe1xuICAgICAgICAgIHBhcmFtZXRlci5vcGVyYXRpb24gPSBvcGVyYXRpb247XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXNvdXJjZXM7XG59XG5cbi8vIFRha2VzIGEgcGF0aCBhbmQgcmV0dXJucyBhIEphdmFTY3JpcHQtZnJpZW5kbHkgdmFyaWFibGUgbmFtZVxuZnVuY3Rpb24gZ2V0UmVzb3VyY2VBcGlOYW1lKGFwaU9iamVjdCl7XG4gIHZhciBwYXRoID0gYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uLnJlc291cmNlUGF0aCB8fCBhcGlPYmplY3QucGF0aDtcblxuICAvLyBTdHJpbmcgbm9uLXdvcmQgY2hhcmFjdGVyc1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXFcvZywgJy8nKTtcblxuICAvLyBUdXJuIHBhdGhzIHdoaWNoIGxvb2svbGlrZS90aGlzIHRvIGxvb2tMaWtlVGhpc1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC8oXFx3KVxcLyhcXHcpL2csIGZ1bmN0aW9uKG1hdGNoLCBwMSwgcDIpe1xuICAgIHJldHVybiBwMSArIHAyLnRvVXBwZXJDYXNlKCk7XG4gIH0pO1xuXG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLy9nLCAnJyk7XG5cbiAgcmV0dXJuIHBhdGg7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2V0UmVxdWVzdEhlYWRlcnMgPSByZXF1aXJlKCcuL2dldFJlcXVlc3RIZWFkZXJzJyksXG4gIGdldFJlcXVlc3RVcmwgPSByZXF1aXJlKCcuL2dldFJlcXVlc3RVcmwnKSxcbiAgZ2V0UmVxdWVzdEJvZHkgPSByZXF1aXJlKCcuL2dldFJlcXVlc3RCb2R5JyksXG4gIGFwcGx5QXV0aERhdGEgPSByZXF1aXJlKCcuL2FwcGx5QXV0aERhdGEnKSxcbiAgZXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLFxuICBzd2FnZ2VyVmFsaWRhdGUgPSByZXF1aXJlKCdzd2FnZ2VyLXZhbGlkYXRlJyk7XG5cbnZhciBhbGxFcnJvclR5cGVzID0ge307XG5PYmplY3Qua2V5cyhzd2FnZ2VyVmFsaWRhdGUuZXJyb3JzKS5mb3JFYWNoKGZ1bmN0aW9uKGVycm9yTmFtZSl7XG4gIGFsbEVycm9yVHlwZXNbZXJyb3JOYW1lXSA9IHN3YWdnZXJWYWxpZGF0ZS5lcnJvcnNbZXJyb3JOYW1lXTtcbn0pO1xuXG5PYmplY3Qua2V5cyhlcnJvclR5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGVycm9yTmFtZSl7XG4gIGFsbEVycm9yVHlwZXNbZXJyb3JOYW1lXSA9IGVycm9yVHlwZXNbZXJyb3JOYW1lXTtcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVPcGVyYXRpb25IYW5kbGVyKG9wZXJhdGlvbiwgZ2V0QXV0aERhdGEsIHJlcXVlc3RIYW5kbGVyKXtcbiAgZnVuY3Rpb24gUmVxdWVzdChkYXRhLCBvcHRpb25zKXtcbiAgICB0aGlzLm1ldGhvZCA9IG9wZXJhdGlvbi5tZXRob2Q7XG4gICAgdGhpcy5vcGVyYXRpb24gPSBvcGVyYXRpb247XG4gICAgdGhpcy5lcnJvclR5cGVzID0gYWxsRXJyb3JUeXBlcztcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICB2YXIgb3BlcmF0aW9uSGFuZGxlciA9IGZ1bmN0aW9uKGRhdGEsIG9wdGlvbnMpe1xuICAgIHZhciBlcnJvcixcbiAgICAgIHJlcXVlc3Q7XG4gICAgXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgXG4gICAgaWYoZGF0YSA9PSBudWxsKSBkYXRhID0ge307XG5cbiAgICAvLyBpZiBhIGZ1bmN0aW9uIGlzIHBhc3NlZCBpbiBhcyBvcHRpb25zLCBhc3N1bWUgaXQncyBhIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgLy8gZm9yIGNvbnZlbmllbmNlXG4gICAgaWYodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpe1xuICAgICAgb3B0aW9ucy5jYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgfVxuXG4gICAgdHJ5e1xuICAgICAgZGF0YSA9IHNpbmdsZVBhcmFtQ29udmVuaWVuY2VQcm9jZXNzb3Iob3BlcmF0aW9uLCBkYXRhKTtcbiAgICAgIGRhdGEgPSByZW1vdmVVbmtub3duUGFyYW1zKG9wZXJhdGlvbiwgZGF0YSk7XG5cbiAgICAgIGVycm9yID0gc3dhZ2dlclZhbGlkYXRlLm9wZXJhdGlvbihkYXRhLCBvcGVyYXRpb24sIG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb24ubW9kZWxzKTtcbiAgICAgIFxuICAgICAgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGRhdGEsIG9wdGlvbnMpO1xuICAgICAgXG4gICAgICAvLyBJZiB3ZSBrbm93IHRoZXJlIGlzIGFuIGVycm9yLCBkb24ndCBhdHRlbXB0IHRvIGNyYWZ0IHRoZSByZXF1ZXN0IHBhcmFtcy5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IHBhcmFtIGdlbmVyYXRvcnMgYXNzdW1lIHZhbGlkIGRhdGEgdG8gd29yayBwcm9wZXJseS5cbiAgICAgIGlmKCFlcnJvcil7XG4gICAgICAgIHJlcXVlc3QudXJsID0gZ2V0UmVxdWVzdFVybChvcGVyYXRpb24sIGRhdGEpO1xuICAgICAgICByZXF1ZXN0LmhlYWRlcnMgPSBnZXRSZXF1ZXN0SGVhZGVycyhvcGVyYXRpb24sIGRhdGEsIG9wdGlvbnMpO1xuICAgICAgICByZXF1ZXN0LmJvZHkgPSBnZXRSZXF1ZXN0Qm9keShvcGVyYXRpb24sIGRhdGEsIHJlcXVlc3QuaGVhZGVycyk7XG4gICAgICAgIFxuICAgICAgICBhcHBseUF1dGhEYXRhKG9wZXJhdGlvbiwgZ2V0QXV0aERhdGEoKSwgcmVxdWVzdCk7XG4gICAgICB9XG4gICAgfSBjYXRjaChlKXtcbiAgICAgIGVycm9yID0gZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKGVycm9yLCByZXF1ZXN0KTtcbiAgfTtcblxuICAvLyBVc2VmdWwgZm9yIGluc3RhbmNlb2YgY2hlY2tzXG4gIG9wZXJhdGlvbkhhbmRsZXIuUmVxdWVzdCA9IFJlcXVlc3Q7XG4gIG9wZXJhdGlvbkhhbmRsZXIuZXJyb3JUeXBlcyA9IGFsbEVycm9yVHlwZXM7XG5cbiAgLy8gVXNlZnVsIGZvciByZWZsZWN0aW9uXG4gIG9wZXJhdGlvbkhhbmRsZXIub3BlcmF0aW9uID0gb3BlcmF0aW9uO1xuICBcbiAgLy8gQ2FuIGJlIHVzZWQgdG8gcHJlZW1wdGl2ZWx5IHZhbGlkYXRlIHdpdGhvdXQgYWN0aW9uXG4gIG9wZXJhdGlvbkhhbmRsZXIudmFsaWRhdGUgPSBmdW5jdGlvbihkYXRhKXtcbiAgICByZXR1cm4gc3dhZ2dlclZhbGlkYXRlLm9wZXJhdGlvbihkYXRhLCBvcGVyYXRpb24sIG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb24ubW9kZWxzKTtcbiAgfTtcblxuICByZXR1cm4gb3BlcmF0aW9uSGFuZGxlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlT3BlcmF0aW9uSGFuZGxlcjtcblxuZnVuY3Rpb24gbm9vcCgpe31cbmNyZWF0ZU9wZXJhdGlvbkhhbmRsZXIubG9nZ2VyID0ge1xuICBkZWJ1Zzogbm9vcCxcbiAgaW5mbzogbm9vcCxcbiAgd2Fybjogbm9vcCxcbiAgZXJyb3I6IG5vb3Bcbn07XG5cbi8vIEVuYWJsZXMgZGF0YSB0byBiZSBwYXNzZWQgZGlyZWN0bHkgZm9yIHNpbmdsZSBwYXJhbSBvcGVyYXRpb25zLlxuZnVuY3Rpb24gc2luZ2xlUGFyYW1Db252ZW5pZW5jZVByb2Nlc3NvcihvcGVyYXRpb24sIGRhdGEpe1xuICAvLyBJZiB0aGVyZSBhcmUgbW9yZSB0aGFuIG9uZSBwYXJhbXMsIGJhaWxcbiAgaWYob3BlcmF0aW9uLnBhcmFtZXRlcnMubGVuZ3RoICE9PSAxKSByZXR1cm4gZGF0YTtcblxuICB2YXIgcGFyYW0gPSBvcGVyYXRpb24ucGFyYW1ldGVyc1swXTtcbiAgXG4gIC8vIElmIHRoZSBwYXJhbSBpcyBhbHJlYWR5IGRlZmluZWQgZXhwbGljaXRseSwgYmFpbFxuICBpZih0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgJiYgKHBhcmFtLm5hbWUgaW4gZGF0YSkpIHJldHVybiBkYXRhO1xuXG4gIHZhciBtb2RlbHMgPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uLm1vZGVscztcblxuICAvLyBJZiB0aGUgZGF0YSBwYXNzZWQgaXMgaXMgbm90IHZhbGlkIGZvciB0aGUgcGFyYW0gZGF0YSB0eXBlLCBiYWlsXG4gIHRyeSB7XG4gICAgc3dhZ2dlclZhbGlkYXRlLmRhdGFUeXBlKGRhdGEsIHBhcmFtLCBtb2RlbHMpOyBcbiAgICB2YXIgd3JhcHBlciA9IHt9O1xuICAgIHdyYXBwZXJbcGFyYW0ubmFtZV0gPSBkYXRhO1xuICAgIHJldHVybiB3cmFwcGVyO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiBkYXRhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVVua25vd25QYXJhbXMob3BlcmF0aW9uLCBkYXRhKXtcbiAgaWYoIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09ICdvYmplY3QnKSByZXR1cm4gZGF0YTtcblxuICB2YXIgcGFyYW1OYW1lcyA9IHt9O1xuICBvcGVyYXRpb24ucGFyYW1ldGVycy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICBwYXJhbU5hbWVzW3BhcmFtLm5hbWVdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgdmFyIHVua25vd25LZXlzID0gT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuICEoa2V5IGluIHBhcmFtTmFtZXMpO1xuICB9KTtcblxuICBjcmVhdGVPcGVyYXRpb25IYW5kbGVyLmxvZ2dlci53YXJuKCdVbmtub3duIHBhcmFtZXRlcnMgcmVtb3ZlZCBmcm9tIHJlcXVlc3Q6JywgXG4gICAgdW5rbm93bktleXMuam9pbignLCAnKSk7XG5cbiAgdW5rbm93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuICAgIGRlbGV0ZSBkYXRhW2tleV07XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gSW52YWxpZFJlcXVlc3RFcnJvcihtZXNzYWdlKXtcbiAgdGhpcy5uYW1lID0gJ0ludmFsaWRSZXF1ZXN0RXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8ICdJbnZhbGlkIHJlcXVlc3QnO1xufVxuSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5JbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEludmFsaWRSZXF1ZXN0RXJyb3I7XG5cbmV4cG9ydHMuSW52YWxpZFJlcXVlc3RFcnJvciA9IEludmFsaWRSZXF1ZXN0RXJyb3I7XG5cblxuZnVuY3Rpb24gTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcihhdXRoTmFtZSwgYXV0aCl7XG4gIHRoaXMubmFtZSA9ICdNaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ05vIGRhdGEgZm91bmQgZm9yIGF1dGhvcml6YXRpb246ICcgKyBhdXRoTmFtZTtcbiAgdGhpcy5hdXRob3JpemF0aW9uID0gYXV0aDtcbn1cbk1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSk7XG5NaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3I7XG5cbmV4cG9ydHMuTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvciA9IE1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3I7XG5cblxuZnVuY3Rpb24gTWlzc2luZ1BhdGhQYXJhbXNFcnJvcihwYXRoUGFyYW1zKXtcbiAgdGhpcy5uYW1lID0gJ01pc3NpbmdQYXRoUGFyYW1zRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnTWlzc2luZyB0aGUgZm9sbG93aW5nIHJlcXVpcmVkIHBhdGggcGFyYW1ldGVyczogJyArIHBhdGhQYXJhbXMuam9pbignJyk7XG59XG5NaXNzaW5nUGF0aFBhcmFtc0Vycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUpO1xuTWlzc2luZ1BhdGhQYXJhbXNFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yO1xuXG5leHBvcnRzLk1pc3NpbmdQYXRoUGFyYW1zRXJyb3IgPSBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yO1xuXG5cbmZ1bmN0aW9uIENvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IoY29udGVudFR5cGUsIG9wZXJhdGlvbil7XG4gIHZhciBhcGlEZWNsYXJhdGlvbiA9IG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb247XG4gIHZhciBjb25zdW1lcyA9IG9wZXJhdGlvbi5jb25zdW1lcyB8fCBhcGlEZWNsYXJhdGlvbi5jb25zdW1lcyB8fCBbXTtcblxuICB0aGlzLm5hbWUgPSAnQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdPcGVyYXRpb24gWycgKyBvcGVyYXRpb24ubmlja25hbWUgKyAnXSBkb2VzIG5vdCBhY2NlcHQgJyArIGNvbnRlbnRUeXBlICsgJy4gSXQgc3VwcG9ydHM6ICcgKyBcbiAgICBjb25zdW1lcy5qb2luKCcsICcpO1xufVxuQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcbkNvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcjtcblxuZXhwb3J0cy5Db250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yID0gQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcjtcblxuXG5mdW5jdGlvbiBBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3IoYWNjZXB0cywgb3BlcmF0aW9uKXtcbiAgdmFyIGFwaURlY2xhcmF0aW9uID0gb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbjtcbiAgdmFyIHByb2R1Y2VzID0gb3BlcmF0aW9uLnByb2R1Y2VzIHx8IGFwaURlY2xhcmF0aW9uLnByb2R1Y2VzIHx8IFtdO1xuXG4gIHRoaXMubmFtZSA9ICdBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnT3BlcmF0aW9uIFsnICsgb3BlcmF0aW9uLm5pY2tuYW1lICsgJ10gZG9lcyBub3QgcHJvZHVjZSAnICsgYWNjZXB0cyArICcuIEl0IHN1cHBvcnRzOiAnICsgXG4gICAgcHJvZHVjZXMuam9pbignLCAnKTtcbn1cbkFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcbkFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3I7XG5cbmV4cG9ydHMuQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yID0gQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yO1xuXG5cbmZ1bmN0aW9uIE9wZXJhdGlvblZhbGlkYXRpb25FcnJvcihvcGVyYXRpb24sIGVycm9ycyl7XG4gIHRoaXMubmFtZSA9ICdPcGVyYXRpb25WYWxpZGF0aW9uRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSBvcGVyYXRpb24ubmlja25hbWUgKyAnIGZhaWxlZCB2YWxpZGF0aW9uOiBcXG5cXHQnICsgZXJyb3JzLmpvaW4oJ1xcblxcdCcpO1xufVxuT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUpO1xuT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE9wZXJhdGlvblZhbGlkYXRpb25FcnJvcjtcblxuZXhwb3J0cy5PcGVyYXRpb25WYWxpZGF0aW9uRXJyb3IgPSBPcGVyYXRpb25WYWxpZGF0aW9uRXJyb3I7XG5cblxuZnVuY3Rpb24gUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yKHBhcmFtZXRlciwgZXJyb3JzKXtcbiAgdGhpcy5uYW1lID0gJ1BhcmFtZXRlclZhbGlkYXRpb25FcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9IHBhcmFtZXRlci5uYW1lICsgJyBmYWlsZWQgdmFsaWRhdGlvbjogXFxuXFx0JyArIGVycm9ycy5qb2luKCdcXG5cXHQnKTtcbn1cblBhcmFtZXRlclZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcblBhcmFtZXRlclZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3I7XG5cbmV4cG9ydHMuUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yID0gUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yO1xuXG5cbmZ1bmN0aW9uIERhdGFUeXBlVmFsaWRhdGlvbkVycm9yKG1lc3NhZ2Upe1xuICB0aGlzLm5hbWUgPSAnRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8ICdJbnZhbGlkIGRhdGEgdHlwZSc7XG59XG5EYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5EYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBEYXRhVHlwZVZhbGlkYXRpb25FcnJvcjtcblxuZXhwb3J0cy5EYXRhVHlwZVZhbGlkYXRpb25FcnJvciA9IERhdGFUeXBlVmFsaWRhdGlvbkVycm9yOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRSZXF1ZXN0Qm9keShvcGVyYXRpb24sIGRhdGEsIGhlYWRlcnMpe1xuICB2YXIgYm9keSA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ2JvZHknICYmIGRhdGFbcGFyYW0ubmFtZV0gIT0gbnVsbDtcbiAgfSkubWFwKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICByZXR1cm4gZGF0YVtwYXJhbS5uYW1lXTtcbiAgfSlbMF07XG5cbiAgaWYoIShoZWFkZXJzICYmICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHJldHVybiBib2R5O1xuXG4gIHZhciBjb250ZW50VHlwZSA9IGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddO1xuICB2YXIgcHJlc2VudEZvcm1QYXJhbXMgPSBvcGVyYXRpb24ucGFyYW1ldGVycy5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHJldHVybiBwYXJhbS5wYXJhbVR5cGUgPT09ICdmb3JtJyAmJiBkYXRhW3BhcmFtLm5hbWVdICE9IG51bGw7XG4gIH0pO1xuXG4gIGlmKGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpICE9PSAtMSl7XG4gICAgYm9keSA9IHByZXNlbnRGb3JtUGFyYW1zLm1hcChmdW5jdGlvbihwYXJhbSl7XG4gICAgICB2YXIga2V5ID0gcGFyYW0ubmFtZSxcbiAgICAgICAgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgIH0pLmpvaW4oJyYnKTtcbiAgfSBlbHNlIGlmKGNvbnRlbnRUeXBlLmluZGV4T2YoJ211bHRpcGFydC9mb3JtLWRhdGEnKSAhPT0gLTEpe1xuICAgIHZhciByYW5kb21uZXNzID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc3Vic3RyKDIpO1xuICAgIHZhciBib3VuZGFyeSA9ICdTd2FnZ2VyQm91bmRhcnknICsgcmFuZG9tbmVzcztcbiAgICBcbiAgICBib2R5ID0gcHJlc2VudEZvcm1QYXJhbXMubWFwKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgIHZhciBrZXkgPSBwYXJhbS5uYW1lLFxuICAgICAgICB2YWx1ZSA9IGRhdGFba2V5XSxcbiAgICAgICAgcmVzdWx0ID0gJy0tJyArIGJvdW5kYXJ5O1xuXG4gICAgICByZXN1bHQgKz0gJ1xcbkNvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cIicgKyBrZXkgKyAnXCInO1xuICAgICAgXG4gICAgICBpZih2YWx1ZS5jb250ZW50VHlwZSl7XG4gICAgICAgIGlmKHZhbHVlLm5hbWUpe1xuICAgICAgICAgIHJlc3VsdCArPSAnOyBmaWxlbmFtZT1cIicgKyB2YWx1ZS5uYW1lICsgJ1wiJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCArPSAnXFxuQ29udGVudC1UeXBlOiAnICsgdmFsdWUuY29udGVudFR5cGU7XG4gICAgICB9XG5cbiAgICAgIGlmKHZhbHVlLmNvbnRlbnRUcmFuc2ZlckVuY29kaW5nKXtcbiAgICAgICAgcmVzdWx0ICs9ICdcXG5Db250ZW50LVRyYW5zZmVyLUVuY29kaW5nOiAnICsgdmFsdWUuY29udGVudFRyYW5zZmVyRW5jb2Rpbmc7XG4gICAgICB9XG5cbiAgICAgIGlmKHZhbHVlLmJvZHkpe1xuICAgICAgICByZXN1bHQgKz0gJ1xcblxcbicgKyB2YWx1ZS5ib2R5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9ICdcXG5cXG4nICsgdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSkuam9pbignXFxuJyk7XG5cbiAgICBib2R5ICs9ICdcXG4tLScgKyBib3VuZGFyeSArICctLVxcbic7XG4gICAgXG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSBjb250ZW50VHlwZS5yZXBsYWNlKFxuICAgICAgJ211bHRpcGFydC9mb3JtLWRhdGEnLCBcbiAgICAgICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0nICsgYm91bmRhcnlcbiAgICApO1xuICB9IGVsc2UgaWYoY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpICE9PSAtMSl7XG4gICAgaWYodHlwZW9mIGJvZHkgIT09ICdzdHJpbmcnKXtcbiAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm9keTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLFxuICBDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yID0gZXJyb3JUeXBlcy5Db250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yLFxuICBBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3IgPSBlcnJvclR5cGVzLkFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcjtcblxudmFyIERFRkFVTFRfQUNDRVBUID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRSZXF1ZXN0SGVhZGVycyhvcGVyYXRpb24sIGRhdGEsIG9wdGlvbnMpe1xuICBkYXRhID0gZGF0YSB8fCB7fTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIGhlYWRlcnMgPSB7fTtcblxuICBvcGVyYXRpb24ucGFyYW1ldGVycy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICBpZihwYXJhbS5wYXJhbVR5cGUgPT09ICdoZWFkZXInICYmIGRhdGFbcGFyYW0ubmFtZV0gIT0gbnVsbCl7XG4gICAgICBoZWFkZXJzW3BhcmFtLm5hbWVdID0gZGF0YVtwYXJhbS5uYW1lXTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFBhc3NlZCBoZWFkZXJzXG4gIGlmKG9wdGlvbnMuaGVhZGVycyl7XG4gICAgT2JqZWN0LmtleXMob3B0aW9ucy5oZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG4gICAgICBoZWFkZXJzW2tleV0gPSBvcHRpb25zLmhlYWRlcnNba2V5XTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIENvbnRlbnQtVHlwZVxuICB2YXIgY29udGVudFR5cGUgPSBvcHRpb25zLmNvbnRlbnRUeXBlIHx8IGdldENvbnRlbnRUeXBlKG9wZXJhdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gIGlmKGNvbnRlbnRUeXBlKSB7XG4gICAgaWYoaGFzQWNjZXB0KG9wZXJhdGlvbiwgY29udGVudFR5cGUpKXtcbiAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gY29udGVudFR5cGU7ICBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IENvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IoY29udGVudFR5cGUsIG9wZXJhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLy8gQWNjZXB0XG4gIHZhciBhY2NlcHQgPSBvcHRpb25zLmFjY2VwdCB8fCBERUZBVUxUX0FDQ0VQVDtcbiAgaWYoYWNjZXB0KXtcbiAgICBpZihoYXNDb250ZW50VHlwZShvcGVyYXRpb24sIGFjY2VwdCkpe1xuICAgICAgaGVhZGVycy5BY2NlcHQgPSBhY2NlcHQ7ICBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcihhY2NlcHQsIG9wZXJhdGlvbik7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gaGVhZGVycztcbn07XG5cbmZ1bmN0aW9uIGdldENvbnRlbnRUeXBlKG9wZXJhdGlvbiwgZGF0YSl7XG4gIHZhciBoYXNCb2R5ID0gb3BlcmF0aW9uLnBhcmFtZXRlcnMuc29tZShmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ2JvZHknICYmIChwYXJhbS5uYW1lIGluIGRhdGEpO1xuICB9KTtcblxuICBpZiAoaGFzQm9keSl7XG4gICAgcmV0dXJuICdhcHBsaWNhdGlvbi9qc29uJztcbiAgfSBlbHNlIHtcbiAgICB2YXIgaGFzRm9ybVBhcmFtcyA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLnNvbWUoZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ2Zvcm0nICYmIChwYXJhbS5uYW1lIGluIGRhdGEpO1xuICAgIH0pO1xuXG4gICAgdmFyIGhhc0ZpbGVQYXJhbSA9IGhhc0Zvcm1QYXJhbXMgJiYgXG4gICAgICBvcGVyYXRpb24ucGFyYW1ldGVycy5zb21lKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgICAgcmV0dXJuIHBhcmFtLnR5cGUgPT09ICdGaWxlJyAmJiAocGFyYW0ubmFtZSBpbiBkYXRhKTtcbiAgICAgIH0pO1xuXG4gICAgaWYoaGFzRmlsZVBhcmFtKSByZXR1cm4gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgIGVsc2UgaWYoaGFzRm9ybVBhcmFtcykgcmV0dXJuICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xuICB9XG59XG5cbi8vIEFjY2VwdHMgaXMgYW4gb3B0aW9uYWwgZmllbGQgaW4gdGhlIHNwZWMsIGJ1dCBtdXN0IGJlIGVuZm9yY2VkIHdoZW4gcHJlc2VudFxuZnVuY3Rpb24gaGFzQWNjZXB0KG9wZXJhdGlvbiwgY29udGVudFR5cGUpe1xuICB2YXIgYXBpRGVjbGFyYXRpb24gPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uO1xuICB2YXIgYWNjZXB0cyA9IG9wZXJhdGlvbi5jb25zdW1lcyB8fCBhcGlEZWNsYXJhdGlvbi5jb25zdW1lcztcblxuICBpZihhY2NlcHRzICYmIGFjY2VwdHMubGVuZ3RoKXtcbiAgICByZXR1cm4gYWNjZXB0cy5pbmRleE9mKGNvbnRlbnRUeXBlKSAhPT0gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbmV4cG9ydHMuaGFzQWNjZXB0ID0gaGFzQWNjZXB0O1xuXG4vLyBDb250ZW50LVR5cGUgKHByb2R1Y2VzKSBpcyBhbiBvcHRpb25hbCBmaWVsZCBpbiB0aGUgc3BlYywgYnV0IG11c3QgYmUgZW5mb3JjZWQgd2hlbiBwcmVzZW50XG5mdW5jdGlvbiBoYXNDb250ZW50VHlwZShvcGVyYXRpb24sIGNvbnRlbnRUeXBlKXtcbiAgdmFyIGFwaURlY2xhcmF0aW9uID0gb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbixcbiAgICBjb250ZW50VHlwZXMgPSBvcGVyYXRpb24ucHJvZHVjZXMgfHwgYXBpRGVjbGFyYXRpb24ucHJvZHVjZXM7XG5cbiAgaWYoY29udGVudFR5cGVzICYmIGNvbnRlbnRUeXBlcy5sZW5ndGgpe1xuICAgIHJldHVybiBjb250ZW50VHlwZXMuaW5kZXhPZihjb250ZW50VHlwZSkgIT09IC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5leHBvcnRzLmhhc0NvbnRlbnRUeXBlID0gaGFzQ29udGVudFR5cGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLFxuICBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yID0gZXJyb3JUeXBlcy5NaXNzaW5nUGF0aFBhcmFtc0Vycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFJlcXVlc3RVcmwob3BlcmF0aW9uLCBkYXRhKXtcbiAgdmFyIHVybCA9IGdldFVybFRlbXBsYXRlKG9wZXJhdGlvbik7XG5cbiAgdXJsID0gYXBwbHlQYXRoUGFyYW1zKHVybCwgb3BlcmF0aW9uLCBkYXRhKTtcblxuICBpZighZGF0YSkgcmV0dXJuIHVybDtcblxuICB2YXIgcXVlcnlQYXJhbXMgPSBvcGVyYXRpb24ucGFyYW1ldGVycy5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHJldHVybiBwYXJhbS5wYXJhbVR5cGUgPT09ICdxdWVyeScgJiYgZGF0YVtwYXJhbS5uYW1lXSAhPT0gdW5kZWZpbmVkO1xuICB9KS5tYXAoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHZhciBrZXkgPSBwYXJhbS5uYW1lO1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pO1xuICB9KS5qb2luKCcmJyk7XG5cbiAgaWYocXVlcnlQYXJhbXMpIHVybCArPSAnPycgKyBxdWVyeVBhcmFtcztcblxuICByZXR1cm4gdXJsO1xufTtcblxuZnVuY3Rpb24gYXBwbHlQYXRoUGFyYW1zKHVybCwgb3BlcmF0aW9uLCBkYXRhKXtcbiAgdmFyIHBhdGhQYXJhbXMgPSBvcGVyYXRpb24ucGFyYW1ldGVycy5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHJldHVybiBwYXJhbS5wYXJhbVR5cGUgPT09ICdwYXRoJztcbiAgfSk7XG5cbiAgdmFyIG1pc3NpbmdQYXJhbXMgPSBwYXRoUGFyYW1zLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIGRhdGFbcGFyYW0ubmFtZV0gPT09IHVuZGVmaW5lZDtcbiAgfSk7XG5cbiAgaWYobWlzc2luZ1BhcmFtcy5sZW5ndGgpe1xuICAgIHRocm93IG5ldyBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yKG1pc3NpbmdQYXJhbXMubWFwKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgIHJldHVybiBwYXJhbS5uYW1lO1xuICAgIH0pKTtcbiAgfVxuXG4gIHBhdGhQYXJhbXMuZm9yRWFjaChmdW5jdGlvbihwYXJhbSl7XG4gICAgdmFyIGtleSA9IHBhcmFtLm5hbWU7XG4gICAgXG4gICAgdmFyIGV4cCA9IG5ldyBSZWdFeHAoJ3snICsga2V5ICsgJ1tefV0qfScsICdnaScpO1xuXG4gICAgdmFyIHZhbHVlID0gZGF0YVtrZXldLnRvU3RyaW5nKCk7XG4gICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcvJykubWFwKGVuY29kZVVSSUNvbXBvbmVudCkuam9pbignLycpO1xuXG4gICAgdXJsID0gdXJsLnJlcGxhY2UoZXhwLCB2YWx1ZSk7XG4gIH0pO1xuXG4gIHJldHVybiB1cmw7XG59XG5cbmZ1bmN0aW9uIGdldFVybFRlbXBsYXRlKG9wZXJhdGlvbil7XG4gIHZhciBhcGlPYmplY3QgPSBvcGVyYXRpb24uYXBpT2JqZWN0OyBcblxuICB2YXIgYmFzZVBhdGggPSBhcGlPYmplY3QuYXBpRGVjbGFyYXRpb24uYmFzZVBhdGg7XG4gIHZhciBwYXRoID0gYXBpT2JqZWN0LnBhdGgucmVwbGFjZSgne2Zvcm1hdH0nLCAnanNvbicpO1xuICBcbiAgcmV0dXJuIGJhc2VQYXRoICsgcGF0aDtcbn1cbiJdfQ==
(9)
});
