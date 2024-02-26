import './output.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import HomeComponent from './routes/Home';
function App() {
  return (
    <div className='w-screen h-screen font-poppins'>

    <BrowserRouter>
     <Routes>{/* app define*/}
       <Route path = "/" element = { <HomeComponent />} />
       <Route path = "/login" element = {<LoginComponent />} />
       <Route path = "/signup" element = {<SignupComponent />} />
     </Routes>
     
    </BrowserRouter>
    </div>
  );
}



export default App;
