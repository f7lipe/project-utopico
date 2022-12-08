import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./layouts/Home"
import Editor from "./layouts/Topic View"
import { EditorProvider } from "./contexts/EditorContext"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topic" element={
          <EditorProvider>
            <Editor />
          </EditorProvider>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
