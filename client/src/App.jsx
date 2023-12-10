
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Search from './pages/Search'
import Profile from './pages/Profile';
import Login from './pages/Login';


const App = () => {
  return (
    <Routes>
<Route path='/' element={<Home/>} />
<Route path='/create' element={<Create/>} />
<Route path='/search' element={<Search/>} />
<Route path='/profile' element={<Profile/>}/>
<Route path='/login' element={<Login/>}/>
    
    </Routes>
  )
}

export default App
