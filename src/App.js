import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/Css/Style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/all" element={<NewPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/completed" element={<CompletedPage />} />
          <Route path="/cancel" element={<CanceledPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/forgetpass" element={<ForgetpassPage />} />
          <Route path="*" element={<Page404 />} />

      </Routes>
    </BrowserRouter>
    </Fragment>


     )
}

export default App

