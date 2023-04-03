const express = require("express");
const { inboxController } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middleware/decorateHtmlResponse");

const router = express.Router();

router.get("/", decorateHtmlResponse("Inbox"), inboxController);

module.exports = router;
