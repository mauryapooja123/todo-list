import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import NoteState from "./component/Context/notes/NoteState";

function App() {
  return (
    <BrowserRouter>
      <NoteState>
        <Routes>
          {/* <Route path="/">
          <Home />
        </Route> */}
          <Route path="/about" element={<About />} />
        </Routes>
      </NoteState>
    </BrowserRouter>
  );
}

export default App;
