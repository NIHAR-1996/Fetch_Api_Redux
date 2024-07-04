import React,{useState,useEffect} from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import "./Company.css";
import { getData } from "../../src/features/ApiSlice";
import { useDispatch, useSelector } from "react-redux";


export const Company = () => {

  // const [data, setData] = useState([]);
  const [name,setName]=useState("");
  const [cp,setCp]= useState("");
  const[bs,setBs]=useState("");
  const { index } = useParams();
  const dispatch=useDispatch();
  const users=useSelector((state)=> state.Apidata.users);

  useEffect(() => {

    if(users.length===0){
      dispatch(getData());
    }
    const userData=users[index];
    if(userData){
      setName(userData.company.name);
      setCp(userData.company.catchPhrase);
      setBs(userData.company.bs);
      
    }
  }, [dispatch,users]);
  return (
    <div className="company-Container">
      <Card className="info-card">
        <Card.Body>
          <Card.Title>
            <h2>User Company Detail</h2>
          </Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
            <div className="company">
              <p>
                Name :{name}
                <br />
              </p>
              <p>
                catchPhrase :{cp}
                <br />
              </p>
              <p>
                bs :{bs}
                <br />
              </p>
            </div>
          </Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    </div>
  );
};
