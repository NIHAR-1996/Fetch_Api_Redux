import React from "react";
import { TableData } from "./pages/Tabledata/TableData";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { DashBoard } from "./DashBoard";
// import { RouterProvider,createBrowserRouter} from "react-router-dom";
import { Company } from "./components/Company";
import { User } from "./components/User";
import { Address } from "./components/Address"
import { Todos } from "./components/Todos";
import { Album } from "./components/Albums";
import { Detail } from "./components/Detail";

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <TableData />
          }
        />
        <Route
          path="/login/:index"
          element={
            <Login />
          }
        />

        <Route
          path="/dashboard/:index"
          element={
            <DashBoard />
          }>
          <Route path="user/:index" element={<User />} />
          <Route path="company/:index" element={<Company />} />
          <Route path="address/:index" element={<Address />} />
          <Route path="todo/:index" element={<Todos />} />
          <Route path="album/:index" element={<Album />} />
          <Route path="detail/:photoId" element={<Detail />} />
        </Route>
        {/* <Route path="/dashboard/:index/detail/:id" element={<Detail />} /> */}
      </Routes>



    </div>
  );
}

export default App;
