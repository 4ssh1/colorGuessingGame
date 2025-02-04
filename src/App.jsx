import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import GamePage from "./GamePage"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
