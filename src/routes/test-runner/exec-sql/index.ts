import { brewBlankExpressFunc } from "code-alchemy";
import jwt from "jsonwebtoken";
import getSequelizeInstance from "../../../utils/get-sequelize-instance";

export default brewBlankExpressFunc(async (req, res) => {
  const { sql, token } = req.body;
  const decoded: any = jwt.verify(token, process.env.jwt_secret);
  const { dialect, host, database, username, password, port } = decoded;

  const sequelize = getSequelizeInstance(
    dialect,
    host,
    database,
    username,
    password,
    port
  );
  const [results, meta] = await sequelize.query(sql);
  res.json({
    code: 200,
    message: "Successfully executed.",
    data: {
      results,
      meta,
    },
  });
});
