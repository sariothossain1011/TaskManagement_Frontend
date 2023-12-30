import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/Css/Style.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from './Pages/DashboardPage';
import CreatePage from './Pages/CreatePage';
import NewPage from './Pages/NewPage';
import ProgressPage from './Pages/ProgressPage';
import CompletedPage from './Pages/CompletedPage';
import CanceledPage from './Pages/CanceledPage';
import ProfilePage from './Pages/ProfilePage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import Page404 from './Pages/Page404';
import { ToastContainer } from 'react-toastify';
import FullScreenLoader from './Components/MasterLayout/FullScreenLoader';
import { getToken } from './Helpers/SessionalHelper';
import SendOTPPage from './Pages/AccountRecoverPage/SendOTPPage';
import VerifyOTPPage from './Pages/AccountRecoverPage/VerifyOTPPage';
import CreatePasswordPage from './Pages/AccountRecoverPage/CreatePasswordPage';

import ReactGA from 'react-ga';

const gaTrackingID = 'UA-297418343-2';
ReactGA.initialize(gaTrackingID)
const App = () => {

  if(getToken()){
    return (
    <Fragment>
      <BrowserRouter>
      <ToastContainer/>
      <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/Create" element={<CreatePage />} />
          <Route path="/All" element={<NewPage />} />
          <Route path="/Progress" element={<ProgressPage />} />
          <Route path="/Completed" element={<CompletedPage />} />
          <Route path="/Canceled" element={<CanceledPage />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/SendOTP" element={<SendOTPPage />} />
          <Route path="/VerifyOTP" element={<VerifyOTPPage />} />
          <Route path="/CreatePassword" element={<CreatePasswordPage />} />
          <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
    <FullScreenLoader />
    </Fragment>
    )
  }
  else{
  return (
    <Fragment>
      <BrowserRouter>
      <ToastContainer/>
      <Routes>
          <Route path="/" element={<Navigate to='/Login' replace/>} />
          <Route path="/Login" element={<LoginPage/>} />
          <Route path="/Registration" element={<RegistrationPage />} />
          <Route path="/SendOTP" element={<SendOTPPage />} />
          <Route path="/VerifyOTP" element={<VerifyOTPPage />} />
          <Route path="/CreatePassword" element={<CreatePasswordPage />} />
          <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
    <FullScreenLoader />
    </Fragment>
     )
  }


}

export default App

