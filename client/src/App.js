import './App.css';
import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';
import VideoList from './Components/VideoList';
import Home from './Components/Home';
import AddVideoForm from './Components/AddVideoForm';

function App() {
  return (
    <div className='container-fluid  content-align-center '>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Add-Video' element={<AddVideoForm />} />
        <Route path='/recommended-videos' element={<VideoList />} />
      </Routes>
    </div>
  );
}

export default App;
