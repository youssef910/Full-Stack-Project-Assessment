import './App.css';
import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';
import VideoList from './Components/VideoList';
import AddVideoForm from './Components/AddVideoForm';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<VideoList />} />
        <Route path='/Add-Video' element={<AddVideoForm />} />
      </Routes>
    </div>
  );
};

export default App;
