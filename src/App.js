import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/newNavbar'
import ListProfileGallery from './listProfileGallery/listProfileGallery'
import OrderList from './orderList/orderList'
import Payment from './payment/payment'
import OrderDetail from './orderDetail/orderDetail'
import DetailShowcase from './detailShowcase/detailShowcase'
import ProfileGalleryArtist from './ProfileGalleryArtist/ProfileGalleryArtist'
import ProfileGalleryUser from './ProfileGalleryUser/ProfileGalleryUser'
import Dashboard from './dashboard/dashboard'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/list-profile-gallery" element={<ListProfileGallery />} />
          <Route path="/order-list" element={<OrderList/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/order-detail" element ={<OrderDetail/>}/>
          <Route path="/detail-showcase" element ={<DetailShowcase/>}/>
          <Route path="/profile-gallery-artist" element ={<ProfileGalleryArtist/>}/>
          <Route path="/profile-gallery-user" element ={<ProfileGalleryUser/>}/>
          <Route path="/dashboard" element ={<Dashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App