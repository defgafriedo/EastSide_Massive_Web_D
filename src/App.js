import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/newNavbar'
import ListProfileGallery from './listProfileGallery/listProfileGallery'
import OrderList from './orderList/orderList'
import Payment from './payment/payment'
import OrderDetail from './orderDetail/orderDetail'
import DetailShowcase from './detailShowcase/detailShowcase'
import Dashboard from './dashboard/dashboard';
import DetailPemesanan from './detailPemesanan/detailPemesanan';
import InputJualKarya from './inputJualKarya/inputJualKarya';
import InputPostingKarya from './inputPostingKarya/inputPostingKarya';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/list-profile-gallery" element={<ListProfileGallery />} />
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order-detail" element={<OrderDetail />} />
          <Route path="/detail-showcase" element={<DetailShowcase />} />
          <Route path="/inputpostingkarya" element={<InputPostingKarya></InputPostingKarya>} />
          <Route path="/inputjualkarya" element={<InputJualKarya></InputJualKarya>} />
          <Route path="/detailpemesanan" element={<DetailPemesanan></DetailPemesanan>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App