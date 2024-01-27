import Router from "components/Common/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LayOut from "components/Common/LayOut";

function App() {
  return (
    <LayOut>
      <ToastContainer />
      <Router />
    </LayOut>
  );
}

export default App;
