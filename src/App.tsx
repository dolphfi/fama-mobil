import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import PartnerDashboard from './pages/PartnerDashboard';

import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import ClientDashboard from './pages/ClientDashboard';
import BecomePartner from './pages/BecomePartner';
import Subscriptions from './pages/Subscriptions';
import KolaboMembership from './pages/KolaboMembership';
import Addresses from './pages/Addresses';
import AddAddress from './pages/AddAddress';
import Wishlist from './pages/Wishlist';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="orders" element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              } />
              <Route path="cart" element={<Cart />} />
              <Route path="/client" element={
                <ProtectedRoute>
                  <ClientDashboard />
                </ProtectedRoute>
              } />
              <Route path="/subscriptions" element={
                <ProtectedRoute>
                  <Subscriptions />
                </ProtectedRoute>
              } />
              <Route path="/kolabo-membership" element={
                <ProtectedRoute>
                  <KolaboMembership />
                </ProtectedRoute>
              } />
              <Route path="/addresses" element={
                <ProtectedRoute>
                  <Addresses />
                </ProtectedRoute>
              } />
              <Route path="/add-address" element={
                <ProtectedRoute>
                  <AddAddress />
                </ProtectedRoute>
              } />
              <Route path="/wishlist" element={
                <ProtectedRoute>
                  <Wishlist />
                </ProtectedRoute>
              } />
              <Route path="/sell" element={<BecomePartner />} />
            </Route>
            {/* Admin route without MainLayout */}
            <Route path="admin" element={<Admin />} />
            <Route path="partner" element={<PartnerDashboard />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
