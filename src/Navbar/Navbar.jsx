import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import brand from '../assets/icons/ccc.png';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Tooltip, IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Navbar({onMenuClick}) {
        
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };

        const menuClick = (page)=>{
          onMenuClick(page)
        }
      
      
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src={brand} alt="ctc" style={{ height: "50px" }} />
          </div>
          <div className="right-nav">
            <Tooltip title="Logout">
              <IconButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {/* <MenuItem onClick={() =>menuClick('profile')}>Profile</MenuItem> */}
              <MenuItem onClick={handleClose}>Logout<LogoutOutlinedIcon style={{marginLeft:'5%',color:'grey'}}/></MenuItem>
            </Menu>
          </div>
          {/* <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div> */}
        </div>
      </nav>
    </div>
  );
}

