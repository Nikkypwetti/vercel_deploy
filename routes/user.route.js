const express = require('express');
const router = express.Router();

const { getUserLandingPage, getStudentInfo, saveFile, getStudent, postStudent, authenticateUser, getNodeMailer } = require('../controllers/user.controller')

router.get("/", getUserLandingPage)

router.post("/student", getStudentInfo)

router.get('/auth1', getStudent)

router.post('/auth', postStudent)

router.post("/cloud", saveFile)

router.post("/signin", authenticateUser)

router.get('/mail', getNodeMailer)




module.exports = router