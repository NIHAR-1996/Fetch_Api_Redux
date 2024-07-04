import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";
import "./Album.css";
import { Link } from "react-router-dom";
import { albumData } from "../features/AlbumSlice";
import { useDispatch, useSelector } from "react-redux";

export const Album = () => {
  const [fetchdata, setFetchdata] = useState([]);
  const { index } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Album.data);

  useEffect(() => {
    if (data?.length === 0) {
      dispatch(albumData());
    }
  }, [dispatch, albumData]);

  useEffect(() => {
    const userId = Number(index);
    const filteredData = data.filter((item) => item.id === userId+1);
    setFetchdata(filteredData);
  }, [index, data]);
  
 

  return (
    <div className="album-container">
      <div className="heading">
        <h2>Album</h2>
      </div>
      <div className="grid-album">
        {fetchdata.map((item, id) => (
          <div className="card-div">
            <Card className="card" key={item.id}>
              <Card.Body>
                <Card.Text>
                  <div className="album-content">
                    <div>
                      <h3>{item.title}</h3>
                    </div>
                    <div>
                      <Link to={`/dashboard/${index}/detail/${item.id}`}>
                        <Button variant="contained" color="success">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
