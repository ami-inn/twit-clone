
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';


const App = () => {
  return (
    <Routes>
<Route path='/' element={<Home/>} />
<Route path='/create' element={<Create/>} />
    
    </Routes>
  )
}

export default App
