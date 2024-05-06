import { Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import NewNote from "./pages/NewNote";

export type Note = {
  id: string;
} & NoteData;

export type NoteData = {
  title: string;
  body: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};

function App() {
  return (
    <div className="container mx-auto px-4">
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/:id">
          <Route index element={<NewNote />} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
