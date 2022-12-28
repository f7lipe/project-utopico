import { BrowserRouter, Routes, Route } from "react-router-dom"
import TopicsPage from "./pages/Topics"
import TopicView from "./layouts/Topic View"
import { TopicProvider } from "./contexts/TopicContext"
import { NetworkProvider } from "./contexts/NetworkContext"
import { NotificationProvider } from "./contexts/NotificationContext"
import NotificationCenter from "./components/Notification Center"

function App() {
  return (
    <NotificationProvider>
      <NetworkProvider>
        <NotificationCenter />
        <BrowserRouter>
          <Routes>
            <Route path="/topics" element={
              <TopicProvider>
                <TopicsPage />
              </TopicProvider>
            } />
            <Route path="/topics/:id" element={
              <TopicProvider>
                <TopicView />
              </TopicProvider>
            } />
          </Routes>
        </BrowserRouter>
      </NetworkProvider>
    </NotificationProvider>
  );
}

export default App;
