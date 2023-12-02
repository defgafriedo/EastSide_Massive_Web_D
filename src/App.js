import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/newNavbar";
import Login from "./loginSignup/Login-Signup-Page";
import DashBoard from "./dashboard/dashboard";
import DashboardPainting from "./dashboardPainting/dashboardPainting";
import DashboardStatue from "./dashboardStatue/dashboardStatue";
import Profile from "./profile/profile";
import EditProfile from "./profile/editProfile";
import AboutUs from "./aboutUs/aboutUs";
import ListProfileGallery from "./listProfileGallery/listProfileGallery";
import OrderList from "./orderList/orderList";
import Payment from "./payment/payment";
import OrderDetail from "./orderDetail/orderDetail";
import DetailShowcase from "./detailShowcase/detailShowcase";
import Dashboard from "./dashboard/dashboard";
import DetailPemesanan from "./detailPemesanan/detailPemesanan";
import InputJualKarya from "./inputJualKarya/inputJualKarya";
import InputPostingKarya from "./inputPostingKarya/inputPostingKarya";
import FooTer from "./components/newFooter";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/dashboardpainting" element={<DashboardPainting />} />
          <Route path="/dashboardstatue" element={<DashboardStatue />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route
            path="/list-profile-gallery"
            element={<ListProfileGallery />}
          />
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order-detail" element={<OrderDetail />} />
          <Route path="/detail-showcase" element={<DetailShowcase />} />
          <Route
            path="/inputpostingkarya"
            element={<InputPostingKarya></InputPostingKarya>}
          />
          <Route
            path="/inputjualkarya"
            element={<InputJualKarya></InputJualKarya>}
          />
          <Route
            path="/detailpemesanan"
            element={<DetailPemesanan></DetailPemesanan>}
          />
        </Routes>
        <FooTer />
      </div>
    </Router>
  );
}

export default App;
