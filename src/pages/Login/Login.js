import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import "./login.css";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch} from "react-redux";
import { getData } from "../../features/ApiSlice";

export const Login = () => {
  const navigate = useNavigate();
  const { index } = useParams();
  const dispatch = useDispatch();

  const [showEmail, setShowEmail] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const users=useSelector((state)=>state.Apidata.users);
  
  useEffect(() => {
    if(users.length===0){
      dispatch(getData());
    }
    const userData=users[index];
    console.log(userData);
    if(userData){
      setEmail(userData.email);
      setUsername(userData.username);
    }

  }, [dispatch,users]); 
    

  const ToggleEvent = () => {
    !showEmail ? setShowEmail(true) : setShowEmail(false);
  };
  const handleUsername=(e)=>{
    setUsername(e.target.value);
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value);
  }

  const handleDashboard = () => {
    const userIndex=users.findIndex((item)=>item.username.toLowerCase()===username.toLowerCase() && item.email.toLowerCase()===email.toLowerCase());
    // Todo find index
   
    (userIndex!==-1)?
    navigate(`/dashboard/${userIndex}`): alert("Invalid username or email")
  };

  return (
    <div className="Main-container">
      <div className="cover-text">
        <h1>Sign in</h1>
        <p>Stay updated on your Professional world</p>
      </div>
      <div className="login-container">
        <input type="text" placeholder="Username" value={username}  onChange={handleUsername}/>
        <br />

        <div className="show-div">
           <input type={showEmail ? "text" : "password"} placeholder="Email" className="show-input" value={email}  onChange={handleEmail}></input> 
          <span className="show" onClick={ToggleEvent}>
            Show
          </span>
        </div>
        <br />

        <p>Forgot email?</p>
      </div>

      <div className="btn-container">
        <div className="login-button">
          <Button
            variant="contained"
            color="success"
            className="btn"
            sx={{
              borderRadius: 5,
              backgroundColor: "rgb(43, 61, 226)",
            }}
            onClick={handleDashboard}
          >
            <b className="log-text">Login</b>
            <LoginIcon />
          </Button>
        </div>
        <div className="or-container">
          <div className="inline"></div>
          <div>
            <p>or</p>
          </div>
          <div className="inline"></div>
        </div>
        <div>
          <button className="sign-in">
            <div className="sign-inside">
              <div>
                <GoogleIcon className="g-icon" />
              </div>
              <div>Sign in with Google</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
