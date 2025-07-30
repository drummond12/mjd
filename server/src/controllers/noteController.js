import Note from "../model/Note.js";

export async function getAllNotes(_, res) {
  try {
    const notes = await Note.find(); 
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in get notes controller", error);
    res.status(500);
  }
}
