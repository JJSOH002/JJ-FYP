import React from "react";  
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  
import Home from "./Pages/Home";      
import Register from "./Pages/Register";  
import Login from "./Pages/Login";  
import ProductPage from './Pages/ProductPage';   
import ShopPage from './Pages/ShopPage';  
import Header from "./Components/Header";  
import "bootstrap/dist/css/bootstrap.min.css";  
import Dashboard from "./Pages/CustomerSupport/Dashboard";  
import Profile from "./Pages/CustomerSupport/Profile";  
import ViewUsers from "./Pages/CustomerSupport/ViewUsers";  
import OrderHistory from "./Pages/CustomerSupport/OrderHistory";  
import Logout from "./Pages/Logout";  
import TicketInfo from "./Pages/CustomerSupport/TicketInfo";  
import TicketDelete from "./Pages/CustomerSupport/TicketDelete";  
import EditProfile from "./Pages/CustomerSupport/EditProfile";  
import { CartProvider } from './Components/CartContext'; 
import Cart from './Pages/Cart'; 
import Payment from './Pages/Payment';
import MixMatch from './Pages/MixMatch';

function App() {  
    return (  
        <CartProvider>  
            <Router>  
                <Header />   
                <Routes>  
                    <Route path="/" element={<Home />} />   
                    <Route path="/register" element={<Register />}/>  
                    <Route path="/login" element={<Login />} />  
                    <Route path="/productpage" element={<ProductPage />}/>  
                    <Route path="/shoppage" element={<ShopPage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/payment" element={<Payment />} />   
                    <Route path="/dashboard" element={<Dashboard />} />   
                    <Route path="/ticket-info"  element={<TicketInfo />} />   
                    <Route path="/ticket-deleted"  element={<TicketDelete />} />   
                    <Route path="/profile" element={<Profile />} />   
                    <Route path="/profile-update" element={<EditProfile />} />   
                    <Route path="/view-accounts" element={<ViewUsers />} />   
                    <Route path="/order-history" element={<OrderHistory />} />   
                    <Route path="/logout" element={<Logout />} /> 
                    <Route path="/mixmatch" element={<MixMatch />} />    
                </Routes>  
            </Router>  
        </CartProvider>  
    );  
}  

export default App;  