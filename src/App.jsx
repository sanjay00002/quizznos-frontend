import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import About from './pages/About.jsx'
import Profile from './pages/Profile.jsx'
import Header from './components/Header.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import Subscriptions from './pages/Subscriptions.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsConditions from './pages/TermsConditions.jsx'
import Footer from './pages/Footer.jsx'
import Fantasyquiz from "./pages/Fantasyquiz.jsx"
import Fantasyquiz1 from './pages/Fantasyquiz1.jsx'
import Fantasyquiz2 from './pages/Fantasyquiz2.jsx'
// Encyverse   --Realtor Ency
const App=()=>{
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/subscriptions' element={<Subscriptions />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-conditions' element={<TermsConditions />} />
          <Route  element={<PrivateRoute/>} >
          <Route path='/profile' element={<Profile />} />
          <Route path='/Fantasyquiz' element={<Fantasyquiz/>}/>
          <Route path='/Fantasyquiz1' element={<Fantasyquiz1/>}/>
          <Route path='/Fantasyquiz2' element={<Fantasyquiz2/>}/>
          </Route>
        </Routes>
      <Footer/>  
    </BrowserRouter>
  )
}

export default App