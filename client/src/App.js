import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { About, Footer } from "./container";

import { Navbar } from "./components/navbar";
// import { BornAgain, SearchFeed, VideoDetail, ChannelDetail } from './components'
import "./App.scss";
import { BornAgain } from "./components";

import socketIoClient from "socket.io-client";
// import RetrieveMyUploads from './components/RetrieveMyUploads';
const ENDPOINT = "http://localhost:8080";
const connection = socketIoClient(ENDPOINT);

function App() {
  const [user, setUser] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    connection.on("INITIAL", (data) => {
      setUser(data.name);
      setUsers(data.users);
    });

    connection.on("NEW_USER", (data) => {
      setUsers((prev) => [...prev, data.name]);
    });

    connection.on("DISCONNECT_USER", (data) => {
      setUsers((prev) => prev.filter((name) => name !== data.name));
    });
  }, []);

  return (
    <div>
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          {/* <Route path="/" exact element={<Feed />} /> */}
          <Route path="/BornAgain/:id" element={<BornAgain />} />
          {/* <Route path="/channel/:id" element={<ChannelDetail />} /> */}
          {/* <Route path="/search/:searchTerm" element={<SearchFeed />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
