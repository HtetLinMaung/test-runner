import { brewBlankExpressFunc } from "code-alchemy";
import jwt from "jsonwebtoken";
import getMongoDbClient from "../../../utils/get-mongodb-client";

export default brewBlankExpressFunc(async (req, res) => {
  const { query, token } = req.body;

  const decoded: any = jwt.verify(token, process.env.jwt_secret);
  const { host, database, username, password, port } = decoded;

  const client = getMongoDbClient(host, database, username, password, port);
  await client.connect();
  const db = client.db;
  const data = await eval(query);
  res.json({
    code: 200,
    message: "Successfully executed.",
    data,
  });
});
