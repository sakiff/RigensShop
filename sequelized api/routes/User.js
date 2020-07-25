const express = require("express");
const router = express.Router();

const userController = require('../controllers/User');

//Render Functions
router.get("/users/new", userController.renderSignUp);
router.get('/users/login', userController.renderLogin);
router.get('/users/dashboard', userController.renderDashboard);

//router.get("/users", userController.listOfUsers);
//router.get("/users/:id", userController.singleUser);
router.delete("users/:id", userController.deleteUser);
//router.put("users/:id", userController.updateUser);

router.post("/users", userController.createUser);
//Browser can not read any request except get and post, we implement get route with delete feature
router.get("/users/delete/:id", userController.deleteUser);
//router.put("users/:id", userController.updateUser);
router.post("/users/edit/:id", userController.editUser);





module.exports = router;
