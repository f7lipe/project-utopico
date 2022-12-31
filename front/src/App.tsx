import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { TopicProvider } from "./contexts/TopicContext"
import { NetworkProvider } from "./contexts/NetworkContext"
import { NotificationProvider } from "./contexts/NotificationContext"
import NotificationCenter from "./components/Notification Center"
import Navbar from "./components/Navbar"
import FallbackLoader from "./components/FallbackLoader"


const TopicsPage = lazy(() => import("./pages/Topics"))
const TopicView = lazy(() => import("./layouts/Topic View"))

function App() {
  return (
    <NotificationProvider>
      <NetworkProvider>
        <NotificationCenter />
        <BrowserRouter>
          <Navbar />
          <Suspense fallback={<FallbackLoader />}>
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
          </Suspense>
        </BrowserRouter>
      </NetworkProvider>
    </NotificationProvider>
  );
}

export default App;
