import { useAuthState } from "react-firebase-hooks/auth";
import { Auth } from "firebase/auth";

import "./App.css";
import ChatBox from "./ChatBox";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import { auth } from "../firebase";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
       <NavBar/>
      {!user ? (
        <Welcome/>
      ) : (
        <>
          <ChatBox/>
        </>
      )}
    </div>
  );
}

export default App;