const express = require('express');
const router = express.Router();
const lecturers = require('../app/controllers/Lecturers');

router.get('/', lecturers.index);

module.exports = router;
