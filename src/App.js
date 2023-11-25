import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/newNavbar";
import FooTer from "./components/newFooter";
import ListProfileGallery from "./listProfileGallery/listProfileGallery";
import OrderList from "./orderList/orderList";
import Payment from "./payment/payment";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/list-profile-gallery"
            element={<ListProfileGallery />}
          />
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <FooTer />
      </div>
    </Router>
  );
}

export default App;
