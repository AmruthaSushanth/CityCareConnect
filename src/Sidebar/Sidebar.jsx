import React, { useEffect, useState } from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import PersonIcon from '@mui/icons-material/Person';

export default function Sidebar({ onMenuClick }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeMenu, setActiveMenu] = useState('null');

  const handleClick = (menu) => {
    setActiveMenu(menu === activeMenu ? null : menu);
  };
  const menuItems = [
    {
      name: "Dashboard",
      icon: <DashboardOutlinedIcon className="iconClass" />,
      id: "dashboard",
    },
    {
      name: "Complaint Register",
      icon: <AppRegistrationOutlinedIcon className="iconClass" />,
      id: "c-register",
    },
    {
      name: "Complaint Status",
      icon: <AutorenewOutlinedIcon className="iconClass" />,
      id: "c-status",
    },
    {
      name: "History",
      icon: <HistoryOutlinedIcon className="iconClass" />,
      id: "history",
    },
    {
      name: "Feedback",
      icon: <ThumbUpAltOutlinedIcon className="iconClass" />,
      id: "feedback",
    },
    {
      name: "User Details",
      icon: <PersonIcon className="iconClass" />,
      id: "profile",
    },
    // Add more menu items as needed
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine whether to show or hide the link based on window width
  const shouldHideLink = windowWidth <= 768;

  const handleItemClick = (value) => {
    onMenuClick(value); // Pass the value to the parent's handleClick function
    handleClick(value);
  };

  return (
    <div className="sideContainer">
      <div className="sidebar-container">
        <div className="sidebar">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`sidebar-link ${item.id === activeMenu ? "active" : ""}`}
              onClick={() => handleItemClick(item.id)}
            >
              {item.icon}
              {shouldHideLink ? null : <a>{item.name}</a>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
