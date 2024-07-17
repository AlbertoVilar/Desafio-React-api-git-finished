
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './routes/Home/home'
import Wellcome from './routes/Home/Welcome'
import SearchArea from './routes/Home/SearchArea';
import Form from './routes/Home/Form';


function App() {


  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />}>
          
          <Route index element={<Wellcome />} />
          <Route path='searcharea' element={<SearchArea />} >
            <Route path='form' element={<Form />} />
          </Route>         

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
