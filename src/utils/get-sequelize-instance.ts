import { Dialect, Sequelize } from "sequelize";

// Replace these values with your own database credentials

// const dialect = "postgres"; // or 'mysql', 'mariadb', 'sqlite', 'mssql'

export default function getSequelizeInstance(
  dialect: any,
  host: string,
  database: string,
  username: string,
  password: string,
  port: number
) {
  // Create a new Sequelize instance for the given database
  return new Sequelize(database, username, password, {
    host,
    dialect,
    port,
  });
}
