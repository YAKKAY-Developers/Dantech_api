module.exports = {
  HOST: "localhost",
  USER: "appuser",
  PASSWORD: "yakkay",
  DB: "dantech",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
//ecommerce