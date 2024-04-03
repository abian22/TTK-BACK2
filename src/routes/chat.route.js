const router = require("express").Router()
const {
  sendMessage,
  getMessages,
} = require("../controllers/chat.controller.js");
const { checkAuth } = require("../middleware/auth");

router.get("/messages/:transmitter",  getMessages);
router.post("/sendMessage",  sendMessage);

module.exports = router;
