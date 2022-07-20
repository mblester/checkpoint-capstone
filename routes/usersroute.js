const express = require("express");
const router = express.Router();
const controller = require("../controllers/users");

router.get("/users", controller.getUser);

router.get("/users/:id", controller.getUserById);

router.post("/users", controller.createUser);

router.put("/users/:id", controller.updateUser);

router.delete("/users/:id", controller.deleteUserById);

module.exports = router;