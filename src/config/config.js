// Define a string de conexão com o banco de dados
module.exports = {
  development: {
    database: {
      host:
        "ls-5756a62b2d5ba73e01484ef0c715f2fa33a454f1.cwy2pbjtckp8.us-east-1.rds.amazonaws.com",
      port: 3306,
      name: "db_usuario",
      dialect: "mysql",
      user: "dbmasteruser",
      password: "WC[0``;Uu[|JP]vUhC[.][4EQaDxCG}u",
    },
  },
  production: {
    database: {
      host: process.env.DB_HOST,
      host: process.env.DB_PORT,
    },
  },
};
