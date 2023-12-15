import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/newNavbar";
import Login from "./loginSignup/Login-Signup-Page";
import DashBoard from "./dashboard/dashboard";
import DashboardPainting from "./dashboardPainting/dashboardPainting";
import DashboardStatue from "./dashboardStatue/dashboardStatue";
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
import AdminList from "./adminList/adminList";
import AdminTransaction from "./adminList/adminTransaction";
import AdminOverview from "./adminList/adminOverview";
import ProfileGaleryArt from "./ProfileGalleryArtist/ProfileGalleryArtist";
import ProfileGaleryUser from "./ProfileGalleryUser/ProfileGalleryUser";
import FooTer from "./components/newFooter";
import ListProfileSeniman from './listProfileSeniman/listProfileSeniman'


import User1 from "./user/profile01/profile";
import EditProfile1 from "./user/profile01/editProfile";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin/*"
            element={
              <>
                <NavBar/>
                <Routes>
                  <Route path="/adminOverview" element={<AdminOverview />} />
                  <Route path="/adminlist" element={<AdminList />} />
                  <Route path="/adminTransaction" element={<AdminTransaction />} />
                </Routes>
              </>
            }
          />

          <Route
            path="/*"
            element={
              <>
                <NavBar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<DashBoard />} />
                  <Route path="/dashboardpainting" element={<DashboardPainting />} />
                  <Route path="/dashboardstatue" element={<DashboardStatue />} />
                  <Route path="/aboutus" element={<AboutUs />} />
                  <Route path="/list-profile-gallery" element={<ListProfileGallery />}/>
                  <Route path="/order-list" element={<OrderList />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/order-detail" element={<OrderDetail />} />
                  <Route path="/detailshowcase" element={<DetailShowcase />} />
                  <Route path="/inputpostingkarya" element={<InputPostingKarya></InputPostingKarya>}/>
                  <Route path="/inputjualkarya" element={<InputJualKarya></InputJualKarya>}/>
                  <Route path="/detailpemesanan" element={<DetailPemesanan></DetailPemesanan>}/>
                  <Route path="/profilegaleryartis" element={<ProfileGaleryArt />} />
                  <Route path="/profilegaleryuser" element={<ProfileGaleryUser />} />
                  <Route path="/user1" element={<User1 />} />
                  <Route path="/editprofile1" element={<EditProfile1 />} />
                  <Route path="/listprofileseniman" element={<ListProfileSeniman/>}/>
                </Routes>
                <FooTer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
