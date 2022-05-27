import './App.css';
import { useEffect, useState } from 'react';
// to connect our client with server, we need
// to install socket.io-client
// first in dependencies end connect here
import socketIoClient from "socket.io-client";

const ENDPOINT = "http://localhost:8080";
const connection = socketIoClient(ENDPOINT);

function App() {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([])
  useEffect(() => {
    connection.on('INITIAL', (data) => {
      console.log("DATA");
      console.log(data);
      setUser(data.name);
      setUsers(data.users);
    })

    connection.on('NEW_USER', data => {
      console.log(data);
      setUsers(data.users);
    })

  }, [])

  return (
    <div className="App">
     {user ? <h1>logged in as: {user}</h1> : <h1>Loading...</h1>}
     {users.map(user => <li>{user}</li>)}
    </div>
  );
}

export default App;
