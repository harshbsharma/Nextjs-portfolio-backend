const express = require("express");
const router = express.Router();

const {createUser} = require("../controllers/Userentry");

router.post("/createentry",createUser);

module.exports = router;