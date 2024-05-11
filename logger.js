function logger(req, res, next) {
  console.log("log ishlamoqda");
  next();
}

module.exports = logger;
