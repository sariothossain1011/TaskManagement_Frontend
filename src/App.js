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
import ForgetpassPage from './Pages/ForgetpassPage';
import FullScrenLoder from './Conponents/MasterLayout/FullScrenLoder';
import { getToken } from './Helpers/SessionalHelper';
import SendOTPPage from './Pages/AccountRecoverPage/SendOTPPage';
import VerifyOTPPage from './Pages/AccountRecoverPage/VerifyOTPPage';
import CreatePasswordPage from './Pages/AccountRecoverPage/CreatePasswordPage';
const App = () => {

  if(getToken()){
    return (
    <Fragment>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/Create" element={<CreatePage />} />
          <Route path="/All" element={<NewPage />} />
          <Route path="/Progress" element={<ProgressPage />} />
          <Route path="/Completed" element={<CompletedPage />} />
          <Route path="/Canceled" element={<CanceledPage />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/Forgetpass" element={<ForgetpassPage />} />
          <Route path="/SendOTP" element={<SendOTPPage />} />
          <Route path="/VerifyOTP" element={<VerifyOTPPage />} />
          <Route path="/CreatePassword" element={<CreatePasswordPage />} />
          <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
    <FullScrenLoder />
    </Fragment>
    )
  }
  else{
  return (
    <Fragment>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navigate to='/Login' replace/>} />
          <Route path="/Login" element={<LoginPage/>} />
          <Route path="/Registration" element={<RegistrationPage />} />
          <Route path="/Forgetpass" element={<ForgetpassPage />} />
          <Route path="/SendOTP" element={<SendOTPPage />} />
          <Route path="/VerifyOTP" element={<VerifyOTPPage />} />
          <Route path="/CreatePassword" element={<CreatePasswordPage />} />
          <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
    <FullScrenLoder />
    </Fragment>
     )
  }


}

export default App

