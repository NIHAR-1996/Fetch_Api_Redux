import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { getData } from "../../src/features/ApiSlice";

import "./User.css";
import { useDispatch, useSelector } from "react-redux";

export const User = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const { index } = useParams();
  const dispatch=useDispatch();
  const users=useSelector((state)=> state.Apidata.users);

  useEffect(() => {
   
    if(users.length===0){
      dispatch(getData());
    }
    const userData=users[index];
    if(userData){
      setId(userData.id);
      setName(userData.name);
      setEmail(userData.email);
      setUsername(userData.username);
      setPhone(userData.phone);
      setWebsite(userData.website);
    }

  }, [dispatch,users]);

  return (
    <div className="userContainer">
      <Card className="info-card">
        <Card.Body>
          <Card.Title>
            <h2>User Detail</h2>
          </Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
            <div className="content">
              <div>
                <p>
                  Id :{id}<br />
                </p>
                <p>
                  Name :{name}<br />
                </p>
                <p>
                  Username:{username}<br />
                </p>
              </div>
              <div>
                <p>
                  Email :{email}<br />
                </p>
                <p>
                  Phone :{phone}<br />
                </p>
                <p>
                  Website :{website}<br />
                </p>
              </div>
            </div>
          </Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    </div>
  );
};
