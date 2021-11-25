import { Note } from "./components/Note";
import { useState, useEffect } from "react";
import { getAllNotes } from "./services/getAllNotes.js";
import { setNewNoteApi, setToken } from "./services/setNewNoteApi";
import { Notification } from "./components/Notification";
import { LoginForm } from "./components/LoginForm";
import { NoteForm } from "./components/NoteForm";
import  login  from "./services/loginService";

const App = () => {
  const [notes, setNotes] = useState([]);

  const [errorMessage, setErrorMesage] = useState(null);

  const [user, setUser] = useState(null);

  useEffect(() => {
    getAllNotes()
      .then((data) => setNotes(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      setToken(user.token);
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    window.localStorage.clear();
  };

  const addNote = (noteObj) => {
    setNewNoteApi(noteObj)
      .then((res) => console.log(res))
      .then(()=> setNotes([...notes, noteObj]))
      .catch((err) => console.log(err));
  };

  const handleLogin = async (username, password) => {
   
    try {
      const userLogged = await login({ username, password });
      //save user
      setUser(userLogged);
      //save token
      window.localStorage.setItem("loggedNoteUser", JSON.stringify(userLogged));
      setToken(userLogged.token);
      
    } catch (err) {
      console.log("Error:", err.response);
      setErrorMesage(err.response.data.error);
      setTimeout(() => {
        setErrorMesage(null);
      }, 5000);
    }
  };


  return (
    <div>
      <div>
        <h1>Notes</h1>
        {user ? (
          <NoteForm addNote={addNote}
                    handleLogout={handleLogout}>          
          </NoteForm>
        ) : (
          <LoginForm  
                     handleSubmit={handleLogin}>
          </LoginForm>
        )}
        <Notification message={errorMessage}></Notification>
        {notes.map((note, key) => {
          return <Note key={key} title={note.title} body={note.body}></Note>;
        })}
      </div>
    </div>
  );
};

export default App;
