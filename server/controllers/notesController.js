const Note = require('../models/Note');

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({});
    res.json(notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { getNotes };
