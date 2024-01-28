import Router from "components/Common/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LayOut from "components/Common/LayOut";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "firebaseApp/config";

function App() {
  const auth = getAuth(app);
  const [init, setInit] = useState<boolean>(false);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth?.currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);

  return (
    <LayOut>
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated} /> : ""}
    </LayOut>
  );
}

export default App;
