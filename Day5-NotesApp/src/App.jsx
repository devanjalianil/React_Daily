import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // 🧠 Step 1: State to store notes
  const [notes, setNotes] = useState([]);

  // 🧠 Step 2: State for input box
  const [input, setInput] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  
  const addNote = () => {
    if (input.trim() === "") return;

    setNotes([...notes, input]);
    setInput("");
  };

  
  const deleteNote = (index) => {
    const updated = notes.filter((_, i) => i !== index);
    setNotes(updated);
  };

  return (
    <div className="container">
      <h1>📝 My Notes</h1>

      {/* Input */}
      <div className="input-box">
        <input
          type="text"
          placeholder="Write something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addNote}>Add</button>
      </div>

      {/* Notes List */}
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button onClick={() => deleteNote(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
