const express = require('express');
const router = express.Router();

const { getUserLandingPage, getStudentInfo, saveFile, getStudent, postStudent, authenticateUser } = require('../controllers/user.controller')

router.get("/", getUserLandingPage)

router.post("/student", getStudentInfo)

router.get('/auth1', getStudent)

router.post('/auth', postStudent)

router.post("/cloud", saveFile)

router.post("/signin", authenticateUser)




module.exports = router