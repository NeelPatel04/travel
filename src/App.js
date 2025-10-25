import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Destination from './pages/Destination';
import TravelBlog from './pages/TravelBlog';
import BucketList from './pages/BucketList';
import About from './pages/About';
import Preview from './pages/Preview';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/blog" element={<TravelBlog />} />
          <Route path="/bucket-list" element={<BucketList />} />
          <Route path="/about" element={<About />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </Router>
    </BrowserRouter>
  );
}

export default App;