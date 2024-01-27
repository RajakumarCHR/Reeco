import "./App.css";
import Navbar from "./components/Navbar";
import OrderDetails from "./components/OrderDetails";
import { orderData } from "./constants";

function App() {
  return (
    <div className="App bg-gray-100">
      <Navbar />
      <OrderDetails orderData={orderData} />
    </div>
  );
}

export default App;
