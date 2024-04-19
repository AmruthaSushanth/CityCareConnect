import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./Dashboard/Dashboard";
import Register from "./Complaint/Register";
import Status from "./Complaint/Status";
import Feedback from "./Feedback/Feedback";
import History from "./History/History";
import Profile from "./Profile/Profile";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  
  const handleNavigation = (page) => {
    console.log('test route',page)
    setCurrentPage(page);
  };

  let content;
  switch (currentPage) {
    case "dashboard":
      content = <Dashboard />;
      break;
    case "c-register":
      content = <Register />;
      break;
    case "c-status":
      content = <Status />;
      break;
      case "history":
        content = <History/>;
        break;
    case "feedback":
      content = <Feedback />;
      break;
    case "profile":
      content = <Profile />;
      break;
    default:
      content = <Dashboard />;
  }
  

  return (
    <div>
      <Router>
        <div className="app">
          {/* Navbar */}
          <Navbar onMenuClick={handleNavigation}/>

          {/* Content */}
          <div className="content">
            {/* Sidebar */}
            <Sidebar onMenuClick={handleNavigation} />

            <Main mainContent={content} />
          </div>
        </div>
      </Router>
    </div>
  );
}
export default App;
