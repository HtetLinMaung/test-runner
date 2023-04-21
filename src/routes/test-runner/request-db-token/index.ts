import { brewBlankExpressFunc } from "code-alchemy";
import jwt from "jsonwebtoken";

export default brewBlankExpressFunc(async (req, res) => {
  const { dialect, host, database, username, password, port, expiresIn } =
    req.body;

  const token = jwt.sign(
    {
      dialect,
      host,
      database,
      username,
      password,
      port,
    },
    process.env.jwt_secret,
    {
      expiresIn: expiresIn || "1d",
    }
  );
  res.json({
    code: 200,
    message: "Sql Token generated successfully",
    data: token,
  });
});
