import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginRegister from './components/LoginRegister';
import RegisterPage from './components/RegisterPage';
import DashboardPage from './components/DashboardPage';
import WatchlistPage from './components/WatchlistPage'
import OrdersPage from './components/OrdersPage'
import ProfileSettingPage from './components/AdminLoginPage';
import AccountPage from './components/AccountPage';
import HoldingPage from './components/HoldingPage';
import AdminLoginPage from './components/AdminLoginPage';
import AdminDashboardPage from './components/AdminDashboardPage';
import UserDetailsPage from './components/UserDetailsPage';
import FundsPage from './components/FundsPage';
import StockDetails from './components/StockDetails';
import AboutUsUI from './components/AboutUsUI';
import GraphUI from './components/GraphUI';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginregister" element={<LoginRegister />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/watchlist" element={<WatchlistPage/>} />
        <Route path="/orders" element={<OrdersPage/>} />
        <Route path="/settings" element={<ProfileSettingPage/>} />
        <Route path="/account" element={<AccountPage/>} />
        <Route path="/holdings" element={<HoldingPage/>} />
        <Route path="/admin-login" element={<AdminLoginPage/>} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage/>} />
        <Route path="/user-details" element={<UserDetailsPage/>} />
        <Route path="/funds" element={<FundsPage/>} />
        <Route path="/stockdetails" element={<GraphUI/>} />
        <Route path="/about-us" element={<AboutUsUI/>} />
      </Routes>
    </Router>
  );
};

export default App;
