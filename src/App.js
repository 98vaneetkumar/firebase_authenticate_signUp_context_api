import { useState } from "react";
import "./App.css";
import { useFirebase } from "./context/Firebase";

function App() {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="App">
      <h1>Firebase</h1>
      <label>Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() => {
          firebase.signInUserWithEmailAndPassword(email, password);
          firebase.putData("users/vaneet",{email,password});
        }}
      >
        Save
      </button>
    </div>
  );
}

export default App;
