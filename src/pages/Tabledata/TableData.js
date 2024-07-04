import React, { useState, useEffect } from "react";
import "./Tabledata.css";
import { getData } from "../../features/ApiSlice";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";

export const TableData = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.Apidata.users );
  const loading = useSelector((state) => state.Apidata.loading);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getData());
    }
    setSearchData(users);
  }, [dispatch, users]);

  const handleLogin = (index) => {
    navigate(`/login/${index}`);
  };

  const handleChange = (e) => {
    const filteredData = users.filter(
      (item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.username.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.email.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchData(filteredData);
  };

  return (
    <div className="table-container">
      <div className="search-container">
        <input
          type="text"
          className="form-control"
          placeholder="Search Name"
          onChange={handleChange}
          style={{
            width: "90%",
            height: "30px",
            border: "2px solid rgba(196, 198, 198, 0.582)",
            borderRadius: "4px",
            fontSize: "17px",
          }}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Street</th>
            <th>Zipcode</th>
            <th>Website</th>
            <th>Phone</th>
            <th>Company Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <Box sx={{ position: 'absolute', top: '40vh', left: '50%' }}>
              <CircularProgress />
            </Box>
          ) : (
            searchData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address.street}</td>
                <td>{item.address.zipcode}</td>
                <td>{item.website}</td>
                <td>{item.phone}</td>
                <td>{item.company.name}</td>
                <td onClick={() => handleLogin(index)}>
                  <LoginRoundedIcon style={{ color: "blue" }} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};