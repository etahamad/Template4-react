import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Setting from "./Setting";
import Profile from "./profile";
import Projects from "./projects";
import Courses from "./courses";
import Friends from "./friends";
import Files from "./files";
import Plans from "./plans";
function App() {
  return (
    <div className="App grid grid-rows-page grid-cols-page">
      <Router>
        <Header />
        <SideBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/files" element={<Files />} />
          <Route path="/plans" element={<Plans />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
