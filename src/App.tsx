import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Videos from './pages/Videos';
import About from './pages/About';
import Contact from './pages/Contact';
import Donate from './pages/Donate';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/donate' element={<Donate />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;