import { express, userModel, verificationModel, bcrypt, jwt } from "../imports";

const router = express.Router();
router.get("/test", (req, res) => {
  res.send("Auth Routes Testing");
});

module.exports = router;
