import './App.css';
// to connect our client with server, we need
// to install socket.io-client
// first in dependencies end connect here
import socketIoClient from "socket.io-client";

const ENDPOINT = "http://localhost:8080";

function App() {
  return (
    <div className="App">
      <p>Hello world App.js</p>
    </div>
  );
}

export default App;
