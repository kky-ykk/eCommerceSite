import './App.css';
import CartProvider from './contextProvider/contextReducer';
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signup';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS bundle (with Popper.js)
import Shop from './components/shop';
import { useState } from 'react';



function App() {

  const [banner, setBanner] = useState(true);

  return (
    <>
       <CartProvider>

        <Router>
          {/* Top Banner */}
          {
            banner &&
            <div style={{backgroundColor:"#f0f0f0",padding:"10px",fontSize:"14px"}}>
              <p>
                30% off storewide — Limited time! <a href="#">Shop Now</a>
                <span style={{ float: "right", cursor: "pointer" }} onClick={() => setBanner(false)}>X</span>
              </p>
            </div>
          }

          <div>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/shop" element={<Shop/>}/>
              <Route exact path="/signup" element={<SignUp/>}/> 
              <Route exact path="/login" element={<Login/>}/> 
              {/* <Route exact path="/myOrder" element={<MyOrder/>}/> */}
            </Routes>
            
          </div>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
