import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/newNavbar'
import ListProfileGallery from './listProfileGallery/listProfileGallery'
import OrderList from './orderList/orderList'
import Payment from './payment/payment'
import OrderDetail from './orderDetail/orderDetail'
import DetailShowcase from './detailShowcase/detailShowcase'
<<<<<<< HEAD
import ProfileGalleryArtist from './ProfileGalleryArtist/ProfileGalleryArtist'
import ProfileGalleryUser from './ProfileGalleryUser/ProfileGalleryUser'
import Dashboard from './dashboard/dashboard'
=======
import Dashboard from './dashboard/dashboard';
import DetailPemesanan from './detailPemesanan/detailPemesanan';
import InputJualKarya from './inputJualKarya/inputJualKarya';
import InputPostingKarya from './inputPostingKarya/inputPostingKarya';
>>>>>>> 6b5687b8c4640f7178454ed8d1042bdb48267d62

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/list-profile-gallery" element={<ListProfileGallery />} />
<<<<<<< HEAD
          <Route path="/order-list" element={<OrderList/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/order-detail" element ={<OrderDetail/>}/>
          <Route path="/detail-showcase" element ={<DetailShowcase/>}/>
          <Route path="/profile-gallery-artist" element ={<ProfileGalleryArtist/>}/>
          <Route path="/profile-gallery-user" element ={<ProfileGalleryUser/>}/>
          <Route path="/dashboard" element ={<Dashboard/>}/>
=======
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order-detail" element={<OrderDetail />} />
          <Route path="/detail-showcase" element={<DetailShowcase />} />
          <Route path="/inputpostingkarya" element={<InputPostingKarya></InputPostingKarya>} />
          <Route path="/inputjualkarya" element={<InputJualKarya></InputJualKarya>} />
          <Route path="/detailpemesanan" element={<DetailPemesanan></DetailPemesanan>} />
>>>>>>> 6b5687b8c4640f7178454ed8d1042bdb48267d62
        </Routes>
      </div>
    </Router>
  );
}

export default App