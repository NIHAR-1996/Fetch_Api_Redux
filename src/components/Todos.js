import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";
import "./Todo.css";
import { getTodoData } from "../features/TodoSlice";
import { useDispatch, useSelector } from "react-redux";

export const Todos = () => {
  const { index } = useParams();
  const [userdata, setUserdata] = useState([]);
  const dispatch = useDispatch();
  const data  = useSelector((state) => state.Todo.data);

  useEffect(() => {
    if (data?.length === 0) {
      dispatch(getTodoData());
    }
  }, [dispatch, data]);

  useEffect(() => {
    const userId = Number(index); // Convert index to a number
    const filteredData = data.filter((item) => item.userId === userId);
    setUserdata(filteredData);
  }, [index, data]);

  return (
    <div className="todo-container">
      <div className="heading">
        <h2>Todo List</h2>
      </div>
      <div className="grid-container">
        {userdata.map((item) => (
          <div className="todo-card" key={item.id}>
            <Card className="card">
              <Card.Body>
                <Card.Text>
                  <div className="todo-content">
                    <div>
                      <h3>Title: {item.title}</h3>
                    </div>
                    <div>
                      {item.completed ? (
                        <Button variant="contained" color="success">
                          Success
                        </Button>
                      ) : (
                        <Button variant="contained" color="error">
                          Error
                        </Button>
                      )}
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