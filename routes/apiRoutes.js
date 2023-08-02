const noteData = require("../db/noteData");
const { v4: uuidv4 } = require("uuid");

module.exports = function (app) {
  // Endpoint to retrieve all notes
  app.get("/api/notes", function (req, res) {
    res.json(noteData);
  });

  // Endpoint to add a new note
  app.post("/api/notes", function (req, res) {
    const { title, text } = req.body;
    if (!title || !text) {
      res.status(400).json({ error: "Both title and text are required." });
    } else {
      const newNote = {
        id: uuidv4(),
        title,
        text,
      };
      noteData.push(newNote);
      res.json(newNote);
    }
  });

  // Endpoint to delete a note by ID
  app.delete("/api/notes/:id", function (req, res) {
    const noteId = req.params.id;
    const index = noteData.findIndex((note) => note.id === noteId);
    if (index !== -1) {
      noteData.splice(index, 1);
      res.json({ success: true });
    } else {
      res.status(404).json({ error: "Note not found" });
    }
  });
};
