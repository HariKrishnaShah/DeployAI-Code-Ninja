import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
import Layout from './components/Layout';
import AuthContextProvider from './context/auth';
import SinglePost from './components/SinglePost';

function App() {
  return (
    <div >
      <AuthContextProvider>
                <BrowserRouter>

                  <Routes>
                   
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/singlepost/:id" element={<SinglePost />}></Route>

            </Route>
  
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>

                    {/* <code> is an bootstrap element  */}
                    <Route path="*" element={<main><code>not found  </code></main>}></Route>
                  </Routes>
                </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
