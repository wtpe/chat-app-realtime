const {registerUser, loginUser, findUser, getUsers} =require('../controllers/userController')
const express = require('express')

const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/find/:userId",findUser)
router.get("/",getUsers)

module.exports = router;