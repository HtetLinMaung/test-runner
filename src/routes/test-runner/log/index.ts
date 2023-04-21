import { brewBlankExpressFunc } from "code-alchemy";
import { log } from "starless-logger";

export default brewBlankExpressFunc(async (req, res) => {
  const { message, level } = req.body;
  log(message, level);
  res.json({
    code: 200,
    message: "Log successfully",
  });
});
