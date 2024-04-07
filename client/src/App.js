import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from './components/Register';
import Home from './components/Home';
import Layout from './components/Layout';
import SinglePost from './components/SinglePost';

function App() {
  return (
    <div >

                <BrowserRouter>

                  <Routes>
                   
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/singlepost/:id" element={<SinglePost />}></Route>

            </Route>


                    {/* <code> is an bootstrap element  */}
                    <Route path="*" element={<main><code>not found  </code></main>}></Route>
                  </Routes>
                </BrowserRouter>
    </div>
  );
}

export default App;
