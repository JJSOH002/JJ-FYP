import React, { useState } from "react";  
import { Container, Form, Button, Alert } from "react-bootstrap";  
import { useNavigate } from "react-router-dom";  

const Login = () => {  
    const [formData, setFormData] = useState({ email: "", password: "", role: "user" }); // Added role to formData  
    const [error, setError] = useState("");  
    const navigate = useNavigate();  

    const handleChange = (e) => {  
        setFormData({ ...formData, [e.target.name]: e.target.value });  
    };  

    const handleSubmit = async (e) => {  
        e.preventDefault();  
        if (!formData.email || !formData.password) {  
            setError("Both fields are required!");  
            return;  
        }  
        setError("");  
        alert(`Login Successful! Welcome ${formData.role}`); // Display selected role  
        navigate("/"); // Redirect to home page  
    };  

    return (  
        <Container className="d-flex flex-column justify-content-center align-items-center vh-100">  
            <h2 className="mb-4">Login to Your Account</h2>  
            {error && <Alert variant="danger">{error}</Alert>}  
            <Form className="w-50" onSubmit={handleSubmit}>  
                <Form.Group className="mb-3">  
                    <Form.Label>Email Address</Form.Label>  
                    <Form.Control  
                        type="email"  
                        name="email"  
                        placeholder="Enter your email"  
                        onChange={handleChange}  
                        required  
                    />  
                </Form.Group>  
                <Form.Group className="mb-3">  
                    <Form.Label>Password</Form.Label>  
                    <Form.Control  
                        type="password"  
                        name="password"  
                        placeholder="Enter your password"  
                        onChange={handleChange}  
                        required  
                    />  
                </Form.Group>  
                <Form.Group className="mb-3">  
                    <Form.Label>Select Role</Form.Label>  
                    <div>  
                        <Form.Check  
                            type="radio"  
                            label="User"  
                            name="role"  
                            value="user"  
                            checked={formData.role === "user"}  
                            onChange={handleChange}  
                        />  
                        <Form.Check  
                            type="radio"  
                            label="Manager"  
                            name="role"  
                            value="manager"  
                            checked={formData.role === "manager"}  
                            onChange={handleChange}  
                        />  
                        <Form.Check  
                            type="radio"  
                            label="Admin"  
                            name="role"  
                            value="admin"  
                            checked={formData.role === "admin"}  
                            onChange={handleChange}  
                        />  
                        <Form.Check  
                            type="radio"  
                            label="Customer Support"  
                            name="role"  
                            value="customerSupport"  
                            checked={formData.role === "customerSupport"}  
                            onChange={handleChange}  
                        />  
                    </div>  
                </Form.Group>  
                <Button variant="primary" type="submit" className="w-100">Login</Button>  
            </Form>  
            <p className="mt-3">Don't have an account? <a href="/register">Register here</a></p>  
        </Container>  
    );  
};  

export default Login;  