import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from './components/Register';
import Home from './components/Home';
import Layout from './components/Layout';
import SinglePost from './components/SinglePost';
import Upload from './components/Upload';

function App() {
  return (
    <div >

                <BrowserRouter>

                  <Routes>
                <Route path = "/" element = {<Upload />}>

                </Route>
                <Route path = "/welcome" element = {<Home />}></Route>


                  </Routes>
                </BrowserRouter>
    </div>
  );
}

export default App;
