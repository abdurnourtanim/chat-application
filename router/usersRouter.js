const express = require("express");
const { usersController } = require("../controller/usersController");
const decorateHtmlResponse = require("../middleware/decorateHtmlResponse");

const router = express.Router();

router.get("/", decorateHtmlResponse("Users"), usersController);

module.exports = router;
