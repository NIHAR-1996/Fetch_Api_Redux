import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FactoryIcon from "@mui/icons-material/Factory";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import "./DashBoard.css";
import { Outlet, Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { User } from "./components/User";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import AlbumIcon from '@mui/icons-material/Album';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
// import {Company} from "./components/Company";

export const DashBoard = () => {
  const [option, setOption] = useState(false);
  const [clicked,setClicked]=useState(null);
  const { index } = useParams();
  const navigate = useNavigate();
  

 

  const userClicked=(element)=>{
    setOption(true);
    setClicked(element);
  }
 
  const dashboardLogin=()=>{
    navigate(`/login/${index}`);
  }

  return (
    <div className="main-container">
      <div className="sidebar">
        <div className="sidebar-heading">
          <div>
            <AccountCircleIcon />
          </div>
          <div>
          <Link to={`user/${index}`} className="link-text"  onClick={() => userClicked('user')}>
            <h1 >User</h1>
            </Link>
          </div>
        </div>
        <div className="sidebar-elements" style={{backgroundColor: clicked ==='user'? ' rgb(128, 128, 232)' : 'inherit'}}>
          <div>
            <PersonOutlineIcon />
          </div>
          <div>
            <Link to={`user/${index}`} className="link-text" onClick={() => userClicked('user')}>
             <span>User Details</span> 
            </Link>
          </div>
        </div>
        <div className="sidebar-elements" style={{background: clicked ==='company'? 'rgb(128, 128, 232)' : 'inherit', color:'azure'}}>
          <div>
            <FactoryIcon />
          </div>
          <div>
            <Link to={`company/${index}`} className="link-text" onClick={() => userClicked('company')}>
              <span >Company</span> 
            </Link>
          </div>
        </div>
        <div className="sidebar-elements" style={{backgroundColor: clicked ==='address'? 'rgb(128, 128, 232)' : 'inherit'}}>
          <div>
            <HomeIcon />
          </div>
          <div>
            <Link to={`address/${index}`} className="link-text" onClick={() => userClicked('address')}>
              
             <span> Address</span> 
            </Link>
          </div>
        </div>
        <div className="sidebar-elements" style={{backgroundColor: clicked ==='todo'? 'rgb(128, 128, 232)' : 'inherit'}}>
          <div>
            <PlaylistAddCheckIcon />
          </div>
          <div>
            <Link to={`todo/${index}`} className="link-text" onClick={() => userClicked('todo')}>
              
             <span> Todos</span> 
            </Link>
          </div>
        </div>
        <div className="sidebar-elements" style={{backgroundColor: clicked ==='album'? 'rgb(128, 128, 232)' : 'inherit'}}>
          <div>
            <AlbumIcon />
          </div>
          <div>
            <Link to={`album/${index}`} className="link-text" onClick={() => userClicked('album')}>
              
             <span> Album</span> 
            </Link>
          </div>
        </div>
      </div>
     
      <div className="main-content">
        <div className="button-container">
        <Button
            variant="contained"
            color="success"
            className="button"
            sx={{
              borderRadius: 2,
              backgroundColor: "rgb(43, 61, 226)",
              width:"10%"
            }}
            onClick={dashboardLogin}
          >
            <b className="log-text">Login</b>
            <LoginIcon />
          </Button>
        </div>
        {option ? <Outlet /> : <User /> }
      </div>
    </div>
  );
};
