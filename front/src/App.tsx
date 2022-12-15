import { BrowserRouter, Routes, Route } from "react-router-dom"
import Topics from "./layouts/Topics"
import TopicView from "./layouts/Topic View"
import { EditorProvider } from "./contexts/EditorContext"
import { TopicProvider } from "./contexts/TopicContext"

function App() {
  return (
    <TopicProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:id" element={
          <EditorProvider>
            <TopicView />
          </EditorProvider>} />
      </Routes>
    </BrowserRouter>
    </TopicProvider>
  );
}

export default App;
