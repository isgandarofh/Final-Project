import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

import Services from "./pages/Services"
import NotFound from "./pages/NotFound"
import DefaultLayout from "./Layout/DefaultLayout"
import AboutMe from "./pages/AboutMe"



export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}
