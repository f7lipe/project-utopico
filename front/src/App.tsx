import { BrowserRouter, Routes, Route } from "react-router-dom"
import Topics from "./layouts/Topics"
import TopicView from "./layouts/Topic View"
import { TopicProvider } from "./contexts/TopicContext"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/topics" element={
          <TopicProvider>
            <Topics />
          </TopicProvider>
        } />
        <Route path="/topics/:id" element={
          <TopicProvider>
            <TopicView />
          </TopicProvider>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
