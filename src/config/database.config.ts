import * as dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();

const db = new Sequelize(
	process.env.DEFAULT_DB as string,
	"postgres",
	"postgres",
	{
		host: "db",
		dialect: "postgres",
		logging: false,
	}
);

export default db;
