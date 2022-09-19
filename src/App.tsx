import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <Home />
    </div>
  );
}

export default App;
