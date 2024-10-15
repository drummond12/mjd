const express = require('express');
const notesController = require('../controllers/notesController'); // import controller
const notesRouter = express.Router();

notesRouter.get('/', notesController.getNotes);  // map route to controller function

module.exports = notesRouter;