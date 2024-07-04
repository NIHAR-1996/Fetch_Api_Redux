import React,{useState,useEffect} from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Address.css";
import { getData } from "../../src/features/ApiSlice";
import { useDispatch, useSelector } from "react-redux";

export const Address = () => {
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [data, setData] = useState([]);
  const { index } = useParams();
  const dispatch=useDispatch();
  const users=useSelector((state)=> state.Apidata.users);

  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     setData(response.data);
    //     const user = response.data[index]; // Assuming index is the correct index to retrieve user data
    //     if (user) {
    //       setStreet(user.address.street);
    //       setSuite(user.address.suite);
    //       setCity(user.address.city);
    //       setZipcode(user.address.zipcode);
    //       setLat(user.address.geo.lat);
    //       setLng(user.address.geo.lng);
    //     }
    //   })
    //   .catch((error) => console.log(error));
    if(users.length===0){
      dispatch(getData());
    }
    const userData=users[index];
    if(userData){
      setStreet(userData.address.street);
      setSuite(userData.address.suite);
      setCity(userData.address.city);
      setZipcode(userData.address.zipcode);
      setLat(userData.address.geo.lat);
      setLng(userData.address.geo.lng);
      
    }
  }, [dispatch,users]);
  
  return (
    <div className="address-Container">
    <Card className="info-card">
      <Card.Body>
        <Card.Title>
          <h2>User Address Detail</h2>
        </Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
          <div className="address">
          <div>
                <p>
                  street :{street}<br />
                </p>
                <p>
                  suite :{suite}<br />
                </p>
                <p>
                  city:{city}<br />
                </p>
              </div>
              <div>
                <p>
                  zipcode :{zipcode}<br />
                </p>
                <p>
                  lat :{lat}<br />
                </p>
                <p>
                  lng :{lng}<br />
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
