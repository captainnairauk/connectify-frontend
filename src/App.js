import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './pages/Authentication/Authentication';
import HomePage from './pages/HomePage/HomePage';
import Message from './pages/Message/Message';

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/*' element={<Authentication/>}/>
      </Routes>
    </div>
  );
}

export default App;
