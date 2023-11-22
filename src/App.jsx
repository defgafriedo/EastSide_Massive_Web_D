import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/newNavbar'
import DetailPemesanan from './detailPemesanan/detailPemesanan';
import InputJualKarya from './inputJualKarya/inputJualKarya';
import InputPostingKarya from './inputPostingKarya/inputPostingKarya';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/inputpostingkarya" element={<InputPostingKarya></InputPostingKarya>} />
          <Route path="/inputjualkarya" element={<InputJualKarya></InputJualKarya>} />
          <Route path="/detailpemesanan" element={<DetailPemesanan></DetailPemesanan>} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;