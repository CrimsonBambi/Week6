<<<<<<< HEAD
/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout';
import Home from './views/Home';
import Profile from './views/Profile';
import Upload from './views/Upload';
import Single from './views/Single';

//const [count, setCount] = useState(0) // defaultti arvo setcount päivittää countin

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}> // react fragment
=======
import {BrowserRouter, Route, Routes} from 'react-router';
import './App.css';
import Home from './views/Home';
import Layout from './components/Layout';
import Profile from './views/Profile';
import Upload from './views/Upload';
import Single from './views/Single';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
>>>>>>> hooks
      <Routes>
        <Route element={<Layout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
<<<<<<< HEAD
          <Route path="/" element={<Home />} />
          <Route path="/single" element={<Single />} />
        </Route>
      </Routes>
    </Router>
=======
          <Route path="/single" element={<Single />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
>>>>>>> hooks
  );
}

export default App;
