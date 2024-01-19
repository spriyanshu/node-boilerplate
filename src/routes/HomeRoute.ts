var express = require("express");

var router = express.Router();

const { Home, createUser } = require("../controllers/homeController");

router.get("/", Home);

router.post("/registerUser", createUser);

module.exports = router;
