function auth(req, res, next) {
  console.log("autintifikatsiya qilinmoqda");
  next();
}

module.exports = auth;
