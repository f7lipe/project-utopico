import { BrowserRouter, Routes, Route } from "react-router-dom"
import Topics from "./layouts/Topics"
import TopicView from "./layouts/Topic View"
import { EditorProvider } from "./contexts/EditorContext"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:id" element={
          <EditorProvider>
            <TopicView />
          </EditorProvider>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
