import "./App.css";
import CalculatePage from "./components/CalculatePage/CalculatePage";
import "react-toastify/dist/ReactToastify.css";
//import HomePage from "./components/HomePage/HomePage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />

      {/* <HomePage /> */}
      <CalculatePage />
    </>
  );
}

export default App;
