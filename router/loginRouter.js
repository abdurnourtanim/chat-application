const express = require("express");
const { loginController } = require("../controller/loginController");
const decorateHtmlResponse = require("../middleware/decorateHtmlResponse");

const router = express.Router();

router.get("/", decorateHtmlResponse("Login"), loginController);

module.exports = router;
