const Car = require("./cars-model");
const vin = require("vin-validator");

const checkCarId = async (req, res, next) => {
  try {
    const car = await Car.getById(req.params.id);
    if (!car) {
      next({
        status: 404,
        message: `car with id ${req.params.id} is not found`,
      });
    } else {
      req.car = car;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkCarPayload = (req, res, next) => {
  const requiredFields = ["vin", "make", "model", "mileage"];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      return next({
        status: 400,
        message: `${field} is missing`,
      });
    }
  }
  next();
};

const checkVinNumberValid = (req, res, next) => {
  if (vin.validate(req.body.vin)) {
    next();
  } else {
    next({
      status: 400,
      message: `vin ${req.body.vin} is invalid`,
    });
  }
};

const checkVinNumberUnique = (req, res, next) => {
  next();
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
